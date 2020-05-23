import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { createStore } from "redux";
import { Provider } from "react-redux";

//import { addCharacterById } from "./actions";
import rootReducer from "./reducers";

const store = createStore(rootReducer);
//console.log("index init log state", store.getState());

store.subscribe(() => console.log("index sub log state - ", store.getState()));

//store.dispatch(addCharacterById(2));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
