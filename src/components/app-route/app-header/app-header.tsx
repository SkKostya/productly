import React from "react";

import {
  Container,
  Logo,
  Info, Menu, List,
  ListItem,
  ButtonsWrapper,
  Button
} from "./styles";

export interface IMenu {
  title: string;
  link: string;
}

interface IProps {
  menuItems: IMenu[];
}

const AppHeader = ({ menuItems }: IProps) => {
  return(
    <Container>
      <Logo src="./images/logo.png" />

      <Info>
        <Menu>
          <List>
            {menuItems.map(item =>
              <ListItem to={item.link}>{item.title}</ListItem>
            )}
          </List>
        </Menu>

        <ButtonsWrapper>
          <Button to="#">Sign In</Button>
          <Button isFilled to="#">Sign Up</Button>
        </ButtonsWrapper>
      </Info>
    </Container>
  );
};

export default AppHeader;