'use strict'
const express = require('express')
const app = express()
const fs = require('fs')
const _ = require('lodash')
const engines = require('consolidate')
var path = require('path')
var bodyParser = require('body-parser')
var User = require('./db').User

function getUserFilePath (username) {
  return path.join(__dirname, 'users', username) + '.json'
}

function getUser (username) {
  var user = JSON.parse(fs.readFileSync(getUserFilePath(username), {encoding: 'utf8'}))
  user.name.full = _.startCase(user.name.first + ' ' + user.name.last)
  _.keys(user.location).forEach(function (key) {
    user.location[key] = _.startCase(user.location[key])
  })
  return user
}

function saveUser (username, data) {
  var fp = getUserFilePath(username)
  fs.unlinkSync(fp) // delete the file
  fs.writeFileSync(fp, JSON.stringify(data, null, 2), {encoding: 'utf8'})
}

function verifyUser (req, res, next) {
  var fp = getUserFilePath(req.params.username)
  fs.exists(fp, function (yes) {
    if (yes) {
      next()
    } else {
      res.redirect('/error/' + req.params.username)
    }
  })
}

app.engine('hbs', engines.handlebars)

app.set('views', './views')
app.set('view engine', 'hbs')

app.use('/profilepics', express.static('images'))

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  User.find({}, (err, users) => {
    res.render('index', {users})
  })
})

app.route('/:username')
  .all((req, res, next) => {
    console.log(req.method, 'for', req.params.username)
    next()
  })
  .get(verifyUser, (req, res) => {
    let username = req.params.username
    let user = getUser(username)
    res.render('user', {user,
      address: user.location})
  })
  .put((req, res) => {
    var username = req.params.username
    var user = getUser(username)
    user.location = req.body
    saveUser(username, user)
    res.end()
  })
  .delete((req, res) => {
    var fp = getUserFilePath(req.params.username)
    fs.unlinkSync(fp)
    res.sendStatus(200)
  })

app.get('*.json', (req, res) => {
  res.download('./users/' + req.path, 'virus.exe')
})

app.get('/data/:username', (req, res) => {
  let username = req.params.username
  var readable = fs.createReadStream('./users/' + username + '.json')
  readable.pipe(res)
})

app.get('/error/:username', (req, res) => {
  res.status(404).send('No user named ' + req.params.username + ' found.')
})

app.listen(3000)
