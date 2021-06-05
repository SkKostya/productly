import styled from "styled-components";
import { Link } from "react-router-dom";

import { colors, sizes } from "../../constants";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgWrapper = styled.div`
  display: inline-block;
  margin-bottom: 25px;
  max-height: 220px;
  border-radius: 8px 8px 0px 0px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  transform-origin: center center;
  transition: transform 0.2s linear;

  :hover {
    transform: scale(1.2);
  }
`;

export const AuthorDate = styled.p`
  margin-top: auto;
  font-size: 16px;
  line-height: 28px;
  color: ${colors.judgeGray};

  & > span {
    font-weight: bold;
  }
`;

export const Title = styled(Link)<{ activeSlide: boolean }>`
  display: block;
  margin-top: 12px;
  max-width: 300px;
  font-weight: bold;
  font-size: 24px;
  line-height: 34px;
  color: ${colors.zeus};
  transition: color 0.1s linear;

  :hover {
    color: ${colors.orangePeel};
  }

  ${({ activeSlide }) =>
  activeSlide && `
    color: ${colors.orangePeel};
  `}

  @media(max-width: ${sizes.laptop}px) {
    font-size: 18px;
    line-height: 26px;
  }
`;
