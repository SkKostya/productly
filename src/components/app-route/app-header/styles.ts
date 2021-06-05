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

  @media(max-width: ${sizes.desktop}px) {
    padding: 25px 15px;
  }
`;

export const Logo = styled.img`
  height: 32px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  @media(max-width: ${sizes.laptop}px) {
    display: none;
  }
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

  @media(max-width: ${sizes.laptop}px) {
    display: flex;
    flex-direction: column;
    margin-top: auto;
  }
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

  @media(max-width: ${sizes.laptop}px) {
    margin-top: 24px;

    &:not(:first-child) {
      margin-left: 0;
    }
  }
`;

export const StyledBurger = styled.button<{ open: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  margin-left: auto;
  padding: 0;
  width: 24px;
  height: 24px;
  border: none;
  z-index: 10;
  background: transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  div {
    position: relative;
    width: 24px;
    height: 4px;
    transform-origin: 1px;
    border-radius: 10px;
    background: ${({ open }) => open ? colors.orangePeel : colors.judgeGray};
    transition: all 0.3s linear;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  @media(max-width: ${sizes.laptop}px) {
    display: flex;
  }
`;

export const StyledMenu = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  padding: 24px;
  width: 320px;
  height: 100vh;
  overflow-y: auto;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  background: ${colors.white};
  box-shadow: 0 0 10px 2px ${colors.gallery};
  transition: transform 0.3s ease-in-out;
  z-index: 5;

  @media (max-width: ${sizes.mobile}px) {
    padding: 24px 15px;
    width: 100%;
  }
`;

export const MobileLink = styled(Link)`
  margin-top: 12px;
  padding: 12px 0;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;
  text-decoration: none;
  color: ${colors.judgeGray};
  transition: color 0.3s linear;

  @media (max-width: ${sizes.mobileL}) {
    text-align: center;
    font-size: 1.5rem;
  }

  &:hover {
    color: ${colors.orangePeel};
  }

  :first-child {
    margin-top: 60px;
  }
`;
