

A study guide for Meteor 1.3:
<br/>(based on Sacha Greif's [study guide on the discover meteor blog](https://www.discovermeteor.com/blog/study-plan-meteor-1-3/#redux))

+ React Goals:
  + [ ] Be able to build a simple component.
  + [ ] Learn about [the main component lifecycle methods](https://facebook.github.io/react/docs/component-specs.html).
  + [ ] Understand how to use state and props.
  + [ ] Understand how to write functional stateless components.
    - [x] Free [Official Meteor Tutorial](https://www.meteor.com/tutorials/react/creating-an-app) ([Github files](https://github.com/meteor/simple-todos-react/tree/e2ede7952b00434f63386423bf8ecb0d9f5d7047))

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
