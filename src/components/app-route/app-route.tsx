import React from "react";
import { Route, RouteProps } from "react-router-dom";

import AppLayout from "./app-layaut";
import { IMenu } from "./app-header/app-header";

interface AppRouteProps extends RouteProps {
  component: React.ComponentType<any>;
  [props: string]: any;
  menuItems: IMenu[];
}

const AppRoute = ({
  component: Component,
  menuItems,
  ...rest
}: AppRouteProps) => (
  <Route
    {...rest}
    render={props => (
      <AppLayout menuItems={menuItems}>
        <Component {...props} />
      </AppLayout>
    )}
  />
)

export default AppRoute;