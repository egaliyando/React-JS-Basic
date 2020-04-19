/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
//import Tittle from "./Component/MyData";
import OutputList from "./Container/OutputList";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<OutputList />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
