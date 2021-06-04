import React from "react";

import AppHeader, { IMenu } from "./app-header/app-header";
import AppFooter from "./app-footer/app-footer";

import { LayoutContent } from "./styles";

interface IProps {
  children: React.ReactElement | React.ReactElement[];
  menuItems: IMenu[];
}

const AppLayout = ({ children, menuItems }: IProps) => (
  <div>
    <AppHeader menuItems={menuItems}/>
    <LayoutContent>{children}</LayoutContent>
    <AppFooter />
  </div>
);

export default AppLayout;
