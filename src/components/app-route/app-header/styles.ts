import styled from "styled-components";
import { Link } from "react-router-dom";

import { sizes, colors } from "../../../constants";

export const Container = styled.header`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 25px 0;
  max-width: ${sizes.desktop}px;
  width: 100%;
`;

export const Logo = styled.img`
  height: 32px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const Menu = styled.nav`
  margin-right: 36px;
`;

export const List = styled.ul`
  display: flex;
`;

export const ListItem = styled(Link)`
  display: block;
  margin: 0 10px;
  padding: 5px;
  font-size: 14px;
  line-height: 28px;
  color: ${colors.zeus};
  transition: color 0.1s linear;

  :hover {
    color: ${colors.orangePeel};
  }
`;

export const ButtonsWrapper = styled.div`
  display: contents;
`;

export const Button = styled(Link)<{ isFilled?: boolean }>`
  display: block;
  padding: 11px 24px;
  border: 1px solid ${colors.periwinkleGray};
  box-sizing: border-box;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  background-color: transparent;
  color: ${colors.nileBlue};

  ${({ isFilled }) =>
  isFilled && `
    border-color: ${colors.orangePeel};
    background-color: ${colors.orangePeel};
    color: ${colors.white};
  `}

  &:not(:first-child) {
    margin-left: 14px;
  }
`;
