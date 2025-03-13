import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import PageHeader from "./Common/PageHeader.tsx";
import PageNavigator from "./PageNavigator.tsx";
import { store } from "./Store/index.ts";
import React from "react";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PageHeader />
        <PageNavigator />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
