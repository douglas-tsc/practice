
<<<<<<< HEAD
HTML and CSS practice comes from [The Complete Web Developer Course]()

I found [DASH](https://dash.generalassemb.ly/) helpful when I was first learning about HTML and CSS.

If you're just getting into code I recommend [Free Code Camp](http://www.freecodecamp.com/), I wish it was around when I started.

Flexbox practice is from [What The Flexbox?!](http://flexbox.io/) by Wes Bos.

I also found [Flexbox Froggy](http://flexboxfroggy.com/) helpful.

The github section is forked from [https://github.com/NataliaLKB/learn-git-basics](https://github.com/NataliaLKB/learn-git-basics)
=======
# WORK IN PROGRESS

##How to Write a HTTP Server, in Plain English.

This page will explain how to get a simple multipage website up a running from scratch.

You can have a look at the website I created here. tk

Following these instruction step-by-step will show you how to make and host your a website in less than an hour. You will learn how http requests and api's work in teh process. You will also learn how to use Node and Heroku. If none of those words mean anything to you then just ignore them. You will know what they mean by the time you finish reading this.

I will going to assume you have absolutely zero understanding of how to write a web server or what a web server even is. You should know what a browser is, have a text editor installed (I used atom tk) and have a basic understanding of HTML, CSS and Javascript.

I am also assuming that you know what the terminal is, have a github account and know how to use git. If you don't know how to use git then this tutorial was designed to teach a monkey how to use. [Github for a monkey](tk).

## What is a Web Server?

If you click on the website I created using this tutorial (tk) you will see that there are 3 links in the top right corner. A web server is the piece of software that is waiting for you to click on one of those links so that it can serve you the page you expect.

The word 'server' can also refer to a computer or data storage unit, the actual machine that the software lives on. To avoid confusion, the word 'web server' will only refer to a piece of software that lives on the web and serves people information.

## How do I get one?

You write one. The one we are about to write is going to be written in javascript (because that is the only way I know how).

Javascript is usually confined to working inside a web browser. If you want to use write a web sever you will have to install something called node.

Asking people what node is will leads to confusing answers. All you need to node is that it will let you write javascript that can do things outside of your browser.

1. [ ] Go to [Nodejs.org](https://nodejs.org/) and click on the green button that says install. This should download a file to your computer that you need to double click on. This is all I had to do using a macbook running OSX Yosemite. tk (links for linux and windows installation ).

- [ ] Open up your terminal and type in `node -v`. If everything installed correctly then it will tell you what version of node is running. I got `v0.12.3` at the time of writing this, you should see something similar. tkg

- [ ] Now that you have node set up, create a new repository in github, call it whatever you want and clone it to your computer. tkg

- [ ] Open you text editor and create a file in the cloned repository called `server.js` (you can call it whatever you want, as long as the file suffix is .js).

- [ ] Copy and paste the example web server code from nodejs.org(tk). I have highlighted the bit you need to copy into you `server.js` file in the image below.

  tk insert image of node example web server.

- [ ] In your terminal, navigate into the repo you just closed and then type `node server.js` (or node [whatever-you-called-your-file.js]). You should see a response that says `Server running at http://127.0.0.1:1337/`. You can copy the `http://127.0.0.1:1337/` bit into your browser and it will load up a page that says "Hello World". tkg

- [ ] Go back to your server.js file in your text editor and change line 4 ( the line that read `res.end('Hello World\n');` to say "res.end('anything you want');". In your terminal press control+C (to stop the server running) and then type in `node server.js` once again to restart it. If you refresh your browser it should now say "anything you want" instead of "Hello Word".

## You just set up a simple web server in 7 steps.
It doesn't do very much. We are now going to build on it. Each line of the code you just copied should start to make more sense as we progress.

### Now for the hard part...
We are going create an html file and then load the contents of that up instead of 'Hello Word'. This is useful because we can get the HTML file to say anything we want. The foundation of any website.

- Go to example.com and copy out the source code and save the file as index.html

- Add the fs variable just below the http variable.
`var fs = require('fs');` This is just a  node thing. Accept it and move on.

- Create a variable called index and set it to:
`var index = fs.readFileSync(__dirname + '/index.html');`
  This gives the server access to html file you created.

- Inside the res.end() function change the parameter from 'Hello World\n' to index. This will load up the index file instead of 'Hello World'

- If you try and restart the server at this point it won't load up because the server is looking for a plain text file as defined on line 3 where it says {'Content-Type': 'text/plain'}. You can either delete the entire line or just change {'Content-Type': 'text/html'} so that it knows to look for an html file and now restart the server. I recommend keeping the line and changing it because what it is doing is tk checking that the server has responded and and keeping this in will allow us to handle errors ina  little bit tk thsi would be a great point to ktrhow is a little error handler.

- Load up you page and you will shoudl see the contents of you html file. All I did at thsi point was trhow in the write up so far. yAdd anything you wan tot the file

## Now to add a new page

+ add page 1 in above create server
```js
var page1 = fs.readFileSync(__dirname + '/page1.html');
```

+ add a fork inside the server so that it knows to go to page 1 when requested.

instead of

#Super Node Resources:
learnyounode https://github.com/workshopper/learnyounode
setting up learnyounode if its a problem http://www.freecodecamp.com/challenges/waypoint-start-a-node.js-server
learnyounode walkthrough https://github.com/leochilds/learnyounode-walkthrough
video walkthrough https://www.youtube.com/watch?v=PvWHzcebjjQ
and part 2 https://www.youtube.com/watch?v=PvWHzcebjjQ
art of node https://github.com/maxogden/art-of-node
mastering node https://github.com/visionmedia/masteringnode


###calling files in node

To perform a filesystem operation you are going to need the fs module from the Node core library. To load this kind of module, or any other "global" module, use the following incantation:

    var fs = require('fs')

Now you have the full fs module available in a variable named fs.

All synchronous (or blocking) filesystem methods in the fs module end with 'Sync'. To read a file, you'll need to use fs.readFileSync('/path/to/file'). This method will return a Buffer object containing the complete contents of the file.

Buffer objects are Node's way of efficiently representing arbitrary arrays of data, whether it be ascii, binary or some other format. Buffer objects can be converted to strings by simply calling the toString() method on them. e.g. var str = buf.toString().
=======
# Meteor Practice

[Meteor Guide 1.4](https://guide.meteor.com/index.html)

- [x] [Voting App](https://leveluptutorials.com/tutorials/meteor-1-4-for-everyone/series-introduction() $8
=======

A study guide for Meteor 1.3:
<br/>(based on Sacha Greif's [study guide on the discover meteor blog](https://www.discovermeteor.com/blog/study-plan-meteor-1-3/#redux))

+ React Goals:
  + [ ] Be able to build a simple component.
  + [ ] Learn about [the main component lifecycle methods](https://facebook.github.io/react/docs/component-specs.html).
  + [ ] Understand how to use state and props.
  + [ ] Understand how to write functional stateless components.
    - [ ] Free [Official Meteor Tutorial](https://www.meteor.com/tutorials/react/creating-an-app) ([Github files](https://github.com/meteor/simple-todos-react/tree/e2ede7952b00434f63386423bf8ecb0d9f5d7047))

    - [ ] Free/Paid [Build a resolution list](https://www.youtube.com/watch?v=B_HJCmoSvmc&list=PLJ0yN6AIWGkOM6OFCkjZf-Vy4WYn1r04f)

    - [x] Paid [Build an impossible List](http://meteorandreact.com/book/) ([Github files](https://github.com/kenrogers/impossiblelist))

    - [x] Paid [Create an imgur style image viewer List](https://www.udemy.com/meteor-react-tutorial/)  ([Github files](https://github.com/StephenGrider/MeteorCasts/tree/master/images))

    - [x] Paid [Create an employee List](https://www.udemy.com/meteor-react-tutorial/) ([Github files](https://github.com/StephenGrider/MeteorCasts/tree/master/employees))

    + [x] Paid [Create an link shortener List](https://www.udemy.com/meteor-react-tutorial/) ([Github files](https://github.com/StephenGrider/MeteorCasts/tree/master/shorten_my_link))

    + [x] Paid [Create an shared markup editor List](https://www.udemy.com/meteor-react-tutorial/) ([Github files](https://github.com/StephenGrider/MeteorCasts/tree/master/markbin))

    + [ ] Paid [React for Beginners](https://reactforbeginners.com/) by [Wesbos](https://twitter.com/wesbos) ([Github files](https://github.com/wesbos/React-For-Beginners-Starter-Files))


+ ES6 Modules & Syntax Goals:
  + [ ] Learn to [use modules with import and export](https://guide.meteor.com/structure.html#intro-to-import-export).
  + [ ] Master object destructuring.
  + [ ] Understand fat arrow functions (and how they affect this).
  + [ ] Understand ES6 classes (especially with regards to React components).
    + https://github.com/lukehoban/es6features#readme
    + https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20%26%20beyond
    + https://github.com/nzakas/understandinges6
    + [Say Hello to es2015](https://tutor.mantrajs.com/say-hello-to-ES2015/introduction) by [@kadirahq](https://twitter.com/kadirahq)
    + Paid http://es6.io/ by [Wesbos](https://twitter.com/wesbos) ([Github files](https://github.com/wesbos/es6.io))
+ Application Architecture
  + The api directory holds all your app’s logic: collections, methods, publications, etc. Note that it should not contain any UI (i.e. React) code.
  + The ui directory on the other hand holds all your front-end React code, and it should ideally only contain React code.
  + Finally, I would personally recommend adding a third containers directory that holds your data layer (using the container pattern) in order to keep your ui directory free from any Meteor-specific code.
+ Collections & Models
+ Publications & Subscriptions
+ Data Loading
+ Routing
+ User Accounts
+ Reactivity
+ Methods
+ Forms
+ NPM & Meteor Packages
+ Local State Management
+ [Redux](https://github.com/reactjs/redux) Goals:
  + [ ] Understand Redux’s philosophy and the Flux pattern.
    + [x] Free [Learn Redux](https://learnredux.com/) by [Wesbos](https://twitter.com/wesbos) ([Github files](https://github.com/wesbos/Learn-Redux-Starter-Files))
    + [ ] Free [Getting started with Redux] by [Dan Abramov]](https://twitter.com/dan_abramov)(https://egghead.io/courses/getting-started-with-redux)
    + [ ] Free [Abhi Ayier](https://twitter.com/AbhiAiyer) also has a great [How We Redux series](https://medium.com/modern-user-interfaces/how-we-redux-part-1-introduction-18a24c3b7efe#.95wng08me) on Medium.
+ Testing


[![js-semistandard-style](https://cdn.rawgit.com/flet/semistandard/master/badge.svg)](https://github.com/Flet/semistandard)
>>>>>>> meteorReactPractice/master
