<<<<<<< HEAD
# website13
=======
# [Stuff to Learn in 2017](https://medium.com/javascript-scene/top-javascript-frameworks-topics-to-learn-in-2017-700a397b711#.ipb8zp7ri)

## [A Study Plan To Cure JavaScript Fatigue](https://medium.freecodecamp.com/a-study-plan-to-cure-javascript-fatigue-8ad3a54f2eb1#.tc0hfwd6g)

### JavaScript & DOM Fundamentals

- [ ] ES6: The current version of JavaScript is ES2016 (aka ES7), but a lot of developers still haven’t properly learned ES6. It’s time to learn.

- [ ] Builtin methods: Learn methods for the standard data types (especially arrays, objects, strings, and numbers).

- [ ] Functions & pure functions: You probably think you’ve got a great grasp of functions, but JavaScript has some tricks up its sleeves, and you’ll need to learn about pure functions to get a handle on functional programming.

- [ ] Closures: Learn how JavaScript’s function scopes behave.

- [ ] Callbacks: A callback is a function used by another function to signal when there is a result ready. You say, “do your job, call me when it’s done.”

- [ ] Promises: A promise is a way to deal with future values. When a function returns a promise, you can attach callbacks using the .then() method to run after the promise resolves. The resolved value is passed into your callback function, e.g., doSomething().then(value => console.log(value));

- [ ] Ajax & server API calls: Most interesting apps eventually need to talk to the network. You should know how to communicate with APIs.

- [ ] ES6: The current version of JavaScript is ES2016 (aka ES7), but a lot of developers still haven’t properly learned ES6. It’s past time.

- [ ] Classes (note: Avoid class inheritance. See How to Use Classes and Sleep at Night.)

- [ ] Functional programming basics: Functional programming produces programs by composing mathematical functions, avoiding shared state & mutable data. It’s been years since I’ve seen a production JavaScript app that didn’t make heavy use of functional programming. It’s time to master the fundamentals.

- [ ] Generators & async/await: In my opinion, the best way to write asynchronous code that looks synchronous. It has a learning curve, but once you’ve learned it, the code will be easier to read.

- [ ] Performance: RAIL — Start with “PageSpeed Insights” & “WebPageTest.org”

- [ ] Progressive Web Applications (PWAs): See “Native Apps are Doomed” & “Why Native Apps Really Are Doomed”

- [ ] Node & Express: Node lets you use JavaScript on the server, meaning your users can store data in the cloud and access it anywhere. Express is the most popular framework for Node by a landslide.

#### React

- [x]  [React for Beginners](https://reactforbeginners.com/) (catch-of-the-day) $
- [x]  [My second app](https://medium.com/learning-new-stuff/building-your-second-react-js-app-eb66924b3774#.erhc0lln7) (my-second-app)
- [x]  [Complete React Web Developer](https://www.udemy.com/the-complete-react-web-app-developer-course) (inputer / [weather](https://build-clyvqpeoje.now.sh) )$
- [x]  [Road to Learn React](http://www.robinwieruch.de/the-road-to-learn-react/) ([news](https://build-dpswyfvxij.now.sh))
- [x]  Built my own mini app called [Ritual](https://ritual.now.sh/)

---
- [ ]  Remake second app with promises and class components.

- [ ]  thinking in react
http://reactfordesigners.com/labs/reactjs-introduction-for-people-who-know-just-enough-jquery-to-get-by/
- [ ]  tictactoe

- [ ]  react forebase tutorials
- [ ]  survey in react projects on udemy
- [ ]  wiki https://code.tutsplus.com/courses/building-a-wiki-with-react-and-firebase
- [ ]  product hunt
- [ ]  first react app˜ https://egghead.io/courses/build-your-first-react-js-application
- [ ]  react starter course http://courses.reactjsprogram.com/
- [ ]  ritual + beeminder
- [ ]  freecodecamp
- [ ]  redo all meteor tutorials in react
- [ ] Next.js*: Dead simple Universal render & Routing for Node & React.
- [ ] velocity-react*: Animations for React — allows you to use the VMD bookmarklet for interactive visual motion design on your pages.

### Redux
Redux provides transactional, deterministic state management for your apps. In Redux, we iterate over a stream of action objects to reduce to the current application state. To learn why that’s important, read “10 Tips for Better Redux Architecture.”

To get started with Redux, check out the excellent courses by the creator of Redux, Dan Abramov:
“Getting Started with Redux”
“Building React Applications with Idiomatic Redux”

Redux is mandatory learning, even if you never use Redux for a production project.

Why?

Because it will give you lots of practice and teach you the value of using pure functions and teach you new ways to think about reducers, which are general-purpose functions for iterating over collections of data and extracting some value from them. Reducers are so generally useful that Array.prototype.reduce was added to the JS specification.
Reducers are important for more than just arrays, and learning new ways of working with Reducers is valuable all by itself.
redux-saga*: A synchronous-style side-effect library for Redux. Use this to manage I/O (such as handling network requests).
>>>>>>> 8ccba7aa8214d39bead4baca0c0156c2b3f8ab9d
