import styled from "styled-components";

import { colors, sizes } from "../../constants";

export const Message = styled.p<{ right: boolean }>`
  position: relative;
  padding: 15px 25px;
  border-radius: 26.5px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  box-shadow: 0px 2px 15px rgba(23, 58, 86, 0.1);
  background: ${colors.white};
  color: ${colors.zeus};

  ::before {
    content: "";
    position: absolute;
    top: calc(100% - 11px);
    left: 32px;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background: ${colors.white};

    ${({ right }) =>
    right && `
      left: calc(100% - 32px - 17px);
    `}
  }

  ::after {
    content: "";
    position: absolute;
    top: calc(100% + 6px + 2px);
    left: 21px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${colors.white};

    ${({ right }) =>
    right && `
      left: calc(100% - 21px - 9px);
    `}
  }
  
  @media(max-width: ${sizes.laptop}px) {
    ::before {
      ${({ right }) =>
      right && `
        left: 32px;
      `}
    }
  
    ::after {
      ${({ right }) =>
      right && `
        left: 21px;
      `}
    }
  }
`;

export const Image = styled.img<{ right: boolean }>`
  position: absolute;
  top: 100%;
  transform: translate(-50%, -12px);
  width: 98px;
  height: 98px;
  border-radius: 50%;

  ${({ right }) =>
  right && `
    right: 0;
    transform: translate(50%, -12px);
  `}
`;

export const Container = styled.div`
  display: inline-block;
  position: relative;

  @media(max-width: ${sizes.laptop}px) {
    display: inline-flex;
    flex-direction: column-reverse;

    ${Image} {
      position: static;
      transform: translate(0, 0);
    }

    ${Message} {
      margin-left: 45px;
    }
  }
`;
