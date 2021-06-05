import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "../../components/button";

import { sizes, colors } from "../../constants";

export const Title = styled.h1`
  font-weight: bold;
  font-size: 44px;
  line-height: 54px;
  color: ${colors.zeus};
`;

export const Description = styled.p`
  margin-top: 30px;
  font-size: 18px;
  line-height: 28px;
  color: ${colors.judgeGray};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 45px;
`;

export const GetStarted = styled(Button)`
  padding: 15px 41px;
  font-weight: bold;
`;

export const WatchVideo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
`;

export const VideoLink = styled(Link)`
  margin-left: 8px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-decoration: underline;
  color: ${colors.orangePeel};
`;

export const Image = styled.img`
  margin-left: 32px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 30px auto 0;
  max-width: ${sizes.desktop}px;
  width: 100%;

  & > * {
    flex: 1;
  }

  @media(max-width: ${sizes.desktop}px) {
    padding: 0 15px;

    ${Title} {
      font-size: 40px;
      line-height: 50px;
    }
  }

  @media(max-width: ${sizes.laptopLg}px) {
    ${Image} {
      width: 40vw;
    }
  }

  @media(max-width: ${sizes.laptop}px) {
    position: relative;

    & > div {
      position: relative;
      z-index: 2;
    }

    ${Title} {
      font-size: 32px;
      line-height: 42px;
    }

    ${Description} {
      font-size: 16px;
      line-height: 24px;
      width: 70vw;
    }

    ${VideoLink} {
      font-size: 16px;
      line-height: 24px;
    }

    ${GetStarted} {
      padding: 10px 30px;
      font-size: 16px;
      line-height: 24px;
    }

    ${Image} {
      position: absolute;
      right: 15px;
      width: 300px;
      opacity: 0.3;
    }
  }

  @media(max-width: ${sizes.mobileL}px) {
    ${Description} {
      font-size: 16px;
      line-height: 22px;
      width: 100%;
    }

    ${VideoLink} {
      font-size: 14px;
      line-height: 18px;
    }

    ${GetStarted} {
      padding: 8px 16px;
      font-size: 14px;
      line-height: 18px;
    }

    ${Image} {
      left: 15px;
      width: 100%;
      opacity: 0.2;
    }
  }

  @media(max-width: ${sizes.mobileL}px) {
    ${GetStarted} {
      width: 70vw;
      padding: 12px 12px;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
    }

    ${WatchVideo} {
      margin-left: 0;
      margin-top: 24px;
    }

    ${ButtonsWrapper} {
      flex-direction: column;
      // align-items: flex-start;
    }
  }

  @media(max-width: ${sizes.mobileXs}px) {
    ${Title} {
      font-size: 26px;
      line-height: 34px;
      text-align: center;
    }
  }
`;
