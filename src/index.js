import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Redux
import { createStore } from "redux";
// import thunk from 'redux-thunk';
import rootreducers from "./reducers/indexreducers";
import { Provider } from "react-redux";
// material
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme/theme";
import reportWebVitals from "./reportWebVitals";

const store = createStore(
  rootreducers,
  // applyMiddleware(thunk),

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
