<p align="center">
  <h3 align="center">Pizza App</h3>
  <p align="center">
  It is a test pizza online ordering application made.<br>
  DEMO &rarr; <a href="https://pizza-astricus-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">Pizza App</a>
  </p>
</p>

## :fire: Description

List of libraries:

- Backend was built with [Firebase](https://firebase.google.com/)
- Frontend was built with [React](https://reactjs.org/), [Create React App](https://github.com/facebook/create-react-app), [Redux](https://redux.js.org/), [Reselect](https://github.com/reduxjs/reselect), [Redux-Saga](https://redux-saga.js.org/)
- Styling was built with [Styled Components](https://styled-components.com/), Sass, without any styling frameworks
- Animations were built with [React Transition Group](https://reactcommunity.org/react-transition-group/)
- Tests were written with a help of [Jest](https://jestjs.io/) and [Enzyme](https://enzymejs.github.io/enzyme/) with [enzyme-to-json](https://github.com/adriantoine/enzyme-to-json) serializer
- All libraries are up-to-date

Application data (users, orders, cart, menu) is stored in `firestore`.

List of features:

- User can order one or multiple different pizzas :pizza:
- User can choose currency (:dollar: or :euro:) of the order
- Delivery cost is added to the final total price
- All orders are stored in database
- User can sign-up, sign-in, sign-in with Google account. After sign-up user data is stored in database. As a signed-in user can view his/her orders
- User can add pizza/pizzas to cart. If a user is signed-in, his/her items in cart are also stored in database, so he/she can continue placing an order anytime. After an order has been placed, cart is cleared

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
