import { ConnectedRouter as Router } from "connected-react-router";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { history } from "./init/middleware/core";
import { store } from "./init/store";

it("App renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<Provider store={store}>
			<Router history={history}>
				<App />
			</Router>
		</Provider>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
