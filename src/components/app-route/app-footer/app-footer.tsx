import React from "react";

import {
  Footer,
  Logo,
  Menu,
  QuickLink,
  Form,
  FooterItemsTitle,
  Input,
  FormButton,
  LogoWrapper
} from "./styles";

const AppFooter = () => {
  return (
    <Footer>
      <LogoWrapper>
        <Logo src="./images/logo.png" />
      </LogoWrapper>

      <Menu>
        <p>Quick Links</p>

        <div>
          <QuickLink to="#">About Us</QuickLink>
          <QuickLink to="#">Blog</QuickLink>
          <QuickLink to="#">Contact</QuickLink>
          <QuickLink to="#">FAQ</QuickLink>
        </div>
      </Menu>
      
      <Menu>
        <p>Legal Stuff</p>

        <div>
          <QuickLink to="#">Disclaimer</QuickLink>
          <QuickLink to="#">Financing</QuickLink>
          <QuickLink to="#">Privacy Policy</QuickLink>
          <QuickLink to="#">Terms of Service</QuickLink>
        </div>
      </Menu>

      <Form>
        <FooterItemsTitle>Knowing you're always on the best energy deal.</FooterItemsTitle>
        <Input placeholder="Enter your phone Number" />
        <FormButton type="submit">Sign up Now</FormButton>
      </Form>
    </Footer>
  );
};

export default AppFooter;
