import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import CounterView from "./features/counter/CounterView.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CounterView></CounterView>
    </Provider>
  </React.StrictMode>
);
