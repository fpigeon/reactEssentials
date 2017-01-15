# React Essential
Learning React from Lynda's course [React.js Essentials][1]

## Assumptions
You already have [node][2] installed

## Getting Started
Pull down the repo and then run:

```js
npm install
npm start
```
## Background
[React][3] is a JavaScript library that is used to build user interfaces. We create reusable components and these components display data as it changes over time. [React][3] was created at Facebook and Instagram and was released initially in March 2013.

## CH1: Setting Up Chrome tools for React
Install the React extensions for the Chrome browser from Chrome Web Store.
* react-detector
    * let's you know if the site your on was built with React
* React Developer Tools
    * describes all React elements on the page

## CH2: Intro to JSX and Babel
Creating your first React Element inside your `index.js`file
First create the element with `React.createElement` and then render it with `reactDOM.render`.

```js
const title = React.createElement {
    'h1',
    { id: 'title', className: 'header' },
    Hello World
}

ReactDOM.render(
    title, //what to render
    document.getElementById('react-container') //where to render it
)
```
Switch over to your `index.html` and then create the html element we referenced above.

```html
<div id="react-container"></div>
<script src="index.js"></script>
```
Next run a local server by adding `httpster` from the console

Install it with npm by running

```js
npm install -g httpster
```

Spin up your server by running the following command from the project directory

```js
httpster -d ./dist -p 3000
```

In Chrome goto `localhost:3000` and you'll see:
* the React Element we created
* react-detector should light up
* use Chrome tools React tab to see all info

Next we can refactor our `index.js` to use ES6 restructuring

```js
const { createElement } = React
const { render } = ReactDOM

const title = createElement {
    'h1',
    { id: 'title', className: 'header' },
    Hello World
}

render(
    title, //what to render
    document.getElementById('react-container') //where to render it
)
```

Restart your server with ctrl-c and up arrow to run the command to restart it and the results in Chrome will be the same.

[1]: https://www.lynda.com/React-js-tutorials/React-js-Essential-Training/496905-2.html
[2]: https://nodejs.org/en/download/
[3]: https://facebook.github.io/react/