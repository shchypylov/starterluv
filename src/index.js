import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk"; // no
import { Router } from "react-router-dom";

import reducers from "./reducers";
import history from "./config/history";

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducers, reduxDevTools, applyMiddleware(ReduxThunk));

const App = () => {
	return (
		<div>
            Hello, world
		</div>
	)
}

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.querySelector("#root"),
);
