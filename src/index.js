import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./utils/Store/store";
import { Provider } from "react-redux";
import { TotalProvider } from "./pages/TotalContext/TotalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TotalProvider>
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  </TotalProvider>
);
