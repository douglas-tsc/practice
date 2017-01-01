# [Stuff to Learn in 2017](https://medium.com/javascript-scene/top-javascript-frameworks-topics-to-learn-in-2017-700a397b711#.ipb8zp7ri)


## JavaScript & DOM Fundamentals
Before you try to land a job using JavaScript, you should have a good grasp of JavaScript fundamentals:

Builtin methods: Learn methods for the standard data types (especially arrays, objects, strings, and numbers).

Functions & pure functions: You probably think you’ve got a great grasp of functions, but JavaScript has some tricks up its sleeves, and you’ll need to learn about pure functions to get a handle on functional programming.

Closures: Learn how JavaScript’s function scopes behave.

Callbacks: A callback is a function used by another function to signal when there is a result ready. You say, “do your job, call me when it’s done.”

Promises: A promise is a way to deal with future values. When a function returns a promise, you can attach callbacks using the .then() method to run after the promise resolves. The resolved value is passed into your callback function, e.g., doSomething().then(value => console.log(value));

Ajax & server API calls: Most interesting apps eventually need to talk to the network. You should know how to communicate with APIs.

ES6: The current version of JavaScript is ES2016 (aka ES7), but a lot of developers still haven’t properly learned ES6. It’s past time.

Classes (note: Avoid class inheritance. See How to Use Classes and Sleep at Night.)

Functional programming basics: Functional programming produces programs by composing mathematical functions, avoiding shared state & mutable data. It’s been years since I’ve seen a production JavaScript app that didn’t make heavy use of functional programming. It’s time to master the fundamentals.

Generators & async/await: In my opinion, the best way to write asynchronous code that looks synchronous. It has a learning curve, but once you’ve learned it, the code will be easier to read.

Performance: RAIL — Start with “PageSpeed Insights” & “WebPageTest.org”

Progressive Web Applications (PWAs): See “Native Apps are Doomed” & “Why Native Apps Really Are Doomed”

Node & Express: Node lets you use JavaScript on the server, meaning your users can store data in the cloud and access it anywhere. Express is the most popular framework for Node by a landslide.

Lodash: A great, modular utility belt for JavaScript, packed with functional programming goodies. Import the data-last functional modules from lodash/fp.

## React
React is a JavaScript library for building user interfaces, created by Facebook. It’s based on the idea of uni-directional data flow, meaning that for each update cycle:
React takes inputs to components as props and conditionally renders DOM updates if data has changed for specific parts of the DOM. Data updates during this phase can’t retrigger the render until the next drawing phase.
Event handling phase — after the DOM has rendered, React listens for and events, delegating events to a single event listener at the root of its DOM tree (for better performance). You can listen to those events and update data in response.
Using any changes to the data, the process repeats at 1.
This is in contrast to 2-way data binding, where changes to the DOM may directly update data (e.g., as is the case with Angular 1 and Knockout). With 2-way binding, changes to the DOM during the DOM render process (called the digest cycle in Angular 1) can potentially retrigger the drawing phase before the drawing is finished, causing reflows and repaints — slowing performance.
React does not prescribe a data management system, but a Flux-based approach is recommended. React’s 1-way data flow approach borrowing ideas from functional programming and immutable data structures transformed the way we think about front-end framework architecture.

For more on React & Flux architecture, read “The Best Way to Learn to Code is to Code: Learn App Architecture by Building Apps”.

create-react-app*: The quickest way to get started with React.

react-router*: Dead simple routing for React.

Next.js*: Dead simple Universal render & Routing for Node & React.

velocity-react*: Animations for React — allows you to use the VMD bookmarklet for interactive visual motion design on your pages.

## Redux
Redux provides transactional, deterministic state management for your apps. In Redux, we iterate over a stream of action objects to reduce to the current application state. To learn why that’s important, read “10 Tips for Better Redux Architecture.”

To get started with Redux, check out the excellent courses by the creator of Redux, Dan Abramov:
“Getting Started with Redux”
“Building React Applications with Idiomatic Redux”

Redux is mandatory learning, even if you never use Redux for a production project.

Why?

Because it will give you lots of practice and teach you the value of using pure functions and teach you new ways to think about reducers, which are general-purpose functions for iterating over collections of data and extracting some value from them. Reducers are so generally useful that Array.prototype.reduce was added to the JS specification.
Reducers are important for more than just arrays, and learning new ways of working with Reducers is valuable all by itself.
redux-saga*: A synchronous-style side-effect library for Redux. Use this to manage I/O (such as handling network requests).
>>>>>>> 0266a95c9b470b29fb98d87ca310e6feb992f866
>>>>>>> c7233f61f3c32f87aa36bd285718850d5a8ee0c3
