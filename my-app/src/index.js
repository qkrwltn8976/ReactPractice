import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { render } from '@testing-library/react';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// ); 
// --> JSX로 변환
const formatName = function (name) {
  return name.firstName + " " + name.lastName;
}
const name = {
  firstName: "JISU",
  lastName: "PARK"
}
const element = <h1>Hello, {formatName(name)}!</h1>

ReactDOM.render(
  element, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();