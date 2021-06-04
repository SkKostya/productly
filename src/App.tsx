import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import { urls } from "./constants";

import { Home } from "./pages";
import { AppRoute } from "./components";

import {
  MAIN_MENU
} from "./mock";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AppRoute path={urls.HOME} component={Home} menuItems={MAIN_MENU} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
