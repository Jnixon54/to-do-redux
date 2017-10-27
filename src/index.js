import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const TASKS = [
  {text: 'Work Out', completed: true}, 
  {text: 'Buy Beer', completed: true},
  {text: 'Create a react app', completed: false}
];

ReactDOM.render(<App tasks={TASKS}/>, document.getElementById('root'));
registerServiceWorker();
