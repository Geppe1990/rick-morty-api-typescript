import * as React from 'react';
import * as ReactDOM from "react-dom";

import App from './App';
import './style/styles.scss'

const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
