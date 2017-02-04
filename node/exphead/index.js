'use strict'
const express = require('express')
const app = express()
const fs = require('fs')
const _ = require('lodash')
const users = []
const engines = require('consolidate')

fs.readFile('users.json', {encoding: 'utf8'}, (err, data) => {
  if (err) throw err
  JSON.parse(data).forEach(user => {
    user.name.full = _.startCase(`${user.name.first} ${user.name.last}`)
    users.push(user)
  })
})

app.engine('hbs', engines.handlebars)

app.set('views', './views')
app.set('view engine', 'hbs')

app.use('/profilepics', express.static('images'))

app.get('/', (req, res) => {
  res.render('index', {users})
})

app.get('/:username', (req, res) => {
  let username = req.params.username
  res.render('user', {username})
})

app.listen(3000)
