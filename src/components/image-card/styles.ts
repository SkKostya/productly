import styled from "styled-components";

import { sizes } from "../../constants";

export const Container = styled.div<{ reverse?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ reverse }) =>
  reverse && `
    flex-direction: row-reverse;
  `}

  & > div {
    width: 45%;
  }

  & > img {
    max-height: 45vw;
  }

  @media(max-width: ${sizes.laptop}px) {
    position: relative;

    & > div {
      position: relative;
      margin-left: 80px;
      width: 60%;
      z-index: 2;
      
      ${({ reverse }) =>
      reverse && `
        margin-left: 0;
        margin-right: 80px;
      `}
    }
  
    & > img {
      position: absolute;
      max-height: 50vw;
      z-index: 1;
      opacity: 0.2;
      
      ${({ reverse }) =>
      reverse ? `
        left: 15px;
      ` : `
        right: 15px;
      `}
    }
  }

  @media(max-width: ${sizes.tablet}px) {
    & > div {
      margin-left: 40px;
      width: 60%;
      
      ${({ reverse }) =>
      reverse && `
        margin-right: 40px;
      `}
    }
  
    & > img {
      max-height: 75vw;
    }
  }

  @media(max-width: ${sizes.mobile}px) {
    & > div {
      margin-left: 0;
      width: 100%;
      
      ${({ reverse }) =>
      reverse && `
        margin-right: 0;
      `}
    }
  
    & > img {
      bottom: 0;
    }
  }

  @media(max-width: ${sizes.mobileXs}px) {
    flex-direction: column-reverse;
  
    & > img {
      position: static;
      margin-bottom: 36px;
      opacity: 0.9;
    }
  }
`;
