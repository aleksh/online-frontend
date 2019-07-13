import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import { ConnectedRouter as Router } from "connected-react-router";
import { Provider } from "react-redux";
import { history } from "./init/middleware/core";
import { store } from "./init/store";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById("root")
);
