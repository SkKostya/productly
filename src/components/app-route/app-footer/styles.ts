import styled from "styled-components";
import { Link } from "react-router-dom";

import { Button } from "../../../components";

import { sizes, colors } from "../../../constants";

export const Footer = styled.footer`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 120px auto 0;
  padding-top: 100px;
  padding-bottom: 95px;
  max-width: ${sizes.desktop}px;
  width: 100%;
  border-top: 1px solid rgba(188, 208, 229, 0.496913);
`;

export const Logo = styled.img`
  height: 32px;
`;

export const Menu = styled.nav``;

export const QuickLink = styled(Link)`
  display: block;
  margin-top: 16px;
  font-size: 16px;
  line-height: 35px;
  color: ${colors.judgeGray};
  transition: color 0.1s linear;

  :first-child {
    margin-top: 35px;
  }

  :hover {
    color: ${colors.orangePeel};
  }
`;

export const FooterItemsTitle = styled.h3`
  max-width: 285px;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  color: ${colors.zeus};
`;

export const Form = styled.form``;

export const Input = styled.input`
  margin-top: 34px;
  padding: 10px 15px;
  width: 100%;
  border: 1px solid ${colors.periwinkleGray};
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 28px;
  background: ${colors.white};
  color: ${colors.zeus};

  ::placeholder {
    color: ${colors.periwinkleGray};
  }
`;

export const FormButton = styled(Button)`
  margin-top: 21px;
  padding: 8px 15px;
`;
