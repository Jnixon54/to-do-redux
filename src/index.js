import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store'
// const TASKS = [
//   {text: 'Work Out', completed: true}, 
//   {text: 'Buy Beer', completed: true},
//   {text: 'Create a react app', completed: false}
// ];

ReactDOM.render(
  <Provider store={store}>
    <div className="container"> 
    <App/>
    </div>
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();
