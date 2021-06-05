import styled from "styled-components";

import { LightenDarkenColor } from "../../helpers/lightenDarkenColor";

import { colors, sizes } from "../../constants";

export const ImageContainer = styled.div<{ color: string; }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 19px;

  ${({ color }) => `
    background: ${color};
    box-shadow: 0 6px 15px 0 ${LightenDarkenColor(color, 30)};
  `}

  @media(max-width: ${sizes.mobileL}px) {
    margin: 0 auto;
  }
`;

export const Title = styled.h3`
  margin-top: 30px;
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  color: ${colors.zeus};

  @media(max-width: ${sizes.mobileL}px) {
    text-align: center;
  }

  @media(max-width: ${sizes.mobile}px) {
    margin-top: 22px;
    font-size: 18px;
    line-height: 24px;
  }
`;

export const Description = styled.p`
  margin-top: 13px;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: ${colors.judgeGray};

  @media(max-width: ${sizes.mobileL}px) {
    text-align: center;
  }

  @media(max-width: ${sizes.mobile}px) {
    line-height: 22px;
  }
`;
