import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./contexts/AuthContext";
import {Provider} from "react-redux";
import {configureStore} from "./store/configureStore";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);
const globalStore = configureStore();
root.render(
	<Provider store={globalStore}>
		<AuthProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AuthProvider>
	</Provider>,
);
