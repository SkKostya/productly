import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "../../../components/button";

import { sizes, colors } from "../../../constants";

export const Logo = styled.img`
  height: 32px;
`;

export const Menu = styled.nav`
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  color: ${colors.zeus};
`;

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

export const LogoWrapper = styled.div``;

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

  @media(max-width: ${sizes.desktop}px) {
    padding: 100px 15px 95px;
  }

  @media(max-width: ${sizes.laptopXs}px) {
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 60px;
    padding: 60px 15px 45px;

    ${QuickLink} {
      line-height: 18px;

      :first-child {
        margin-top: 20px;
      }
    }

    ${LogoWrapper} {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    ${Menu} {
      margin-top: 32px;
      width: 30%;
      padding-left: 30px;
    }

    ${Form} {
      margin-top: 32px;
    }

    ${FooterItemsTitle} {
      text-align: center;
    }

    ${FormButton} {
      width: 100%;
      text-align: center;
    }
  }

  @media(max-width: ${sizes.mobileLg}px) {
    ${Menu} {
      margin-top: 32px;
      max-width: 165px;
      width: 100%;
      padding-left: 30px;
    }
  }

  @media(max-width: ${sizes.mobileL}px) {
    margin-top: 45px;
    padding: 45px 15px 30px;
  }
`;
