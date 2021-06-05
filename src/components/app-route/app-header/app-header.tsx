import React from "react";

import {
  Container,
  Logo,
  Info, Menu, List,
  ListItem,
  ButtonsWrapper,
  Button,
  StyledBurger,
  StyledMenu,
  MobileLink
} from "./styles";

export interface IMenu {
  title: string;
  link: string;
}

interface IProps {
  menuItems: IMenu[];
}

const MobileMenu = ({ open, menuItems }: { open: boolean; menuItems: IMenu[] }) => {
  return (
    <StyledMenu open={open}>
      {menuItems.map(item =>
        <MobileLink key={item.title} to={item.link}>{item.title}</MobileLink>
      )}

      <ButtonsWrapper>
        <Button to="#">Sign In</Button>
        <Button isFilled to="#">Sign Up</Button>
      </ButtonsWrapper>
    </StyledMenu>
  )
}

const Burger = ({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void; }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

const AppHeader = ({ menuItems }: IProps) => {
  const [open, setOpen] = React.useState(false);

  const handleOpenChanged = (open: boolean) => {
    setOpen(open);
    if(open) {
      document.body.classList.add("non-scroll"); 
    } else {
      document.body.classList.remove("non-scroll"); 
    }
  }

  return(
    <Container>
      <Logo src="./images/logo.png" />

      <Info>
        <Menu>
          <List>
            {menuItems.map(item =>
              <ListItem key={item.title} to={item.link}>{item.title}</ListItem>
            )}
          </List>
        </Menu>

        <ButtonsWrapper>
          <Button to="#">Sign In</Button>
          <Button isFilled to="#">Sign Up</Button>
        </ButtonsWrapper>
      </Info>

      <Burger open={open} setOpen={handleOpenChanged} />
      <MobileMenu open={open} menuItems={menuItems} />
    </Container>
  );
};

export default AppHeader;