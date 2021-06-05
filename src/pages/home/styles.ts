import styled from "styled-components";

import { Button } from "../../components";

import { sizes, colors } from "../../constants";

export const DesignInfo = styled.div`
  margin: 0 auto;
  max-width: ${sizes.desktop}px;
  width: 100%;

  @media(max-width: ${sizes.desktop}px) {
    padding: 0 15px;
  }
`;

export const DesignTitle = styled.h2`
  margin: 0 auto;
  max-width: 500px;
  font-weight: bold;
  font-size: 36px;
  line-height: 54px;
  text-align: center;
  color: ${colors.zeus};
`;

export const Tools = styled.div`
  display: flex;
  margin-top: 30px;

  & > div {
    margin-top: 24px;
    width: calc(100%/4 - (45px * 3) / 4);

    &:not(:last-child) {
      margin-right: 45px;
    }
  }
`;

export const ToolsButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 34px;
`;

export const DesignTools = styled.div`
  margin-top: 110px;
  padding-bottom: 90px;
  // url for localhost: ../../../images/tools-bg.png
  background: url(./images/tools-bg.png);
  background-size: 100% 60%;
  background-repeat: no-repeat;
  background-position: bottom;

  @media(max-width: ${sizes.laptop}px) {
    background-size: 100% 30%;

    ${DesignTitle} {
      font-size: 32px;
      line-height: 48px;
    }

    ${Tools} {
      flex-wrap: wrap;
      justify-content: center;

      & > div {
        width: calc(100%/3);
    
        :nth-child(2n + 2) {
          margin-right: 0;
        }
      }
    }
  }

  @media(max-width: ${sizes.tablet}px) {
    ${DesignTitle} {
      font-size: 30px;
      line-height: 44px;
    }

    ${Tools} {
      & > div {
        width: calc(100%/2 - (45px / 2));
    
        :nth-child(2n + 2) {
          margin-right: 0;
        }
      }
    }
  }

  @media(max-width: ${sizes.mobile}px) {
    margin-top: 80px;
    background-size: 100% 10%;

    ${DesignTitle} {
      font-size: 22px;
      line-height: 32px;
    }

    ${Tools} {
      margin-top: 18px;

      & > div {
        margin-top: 28px;
        margin-right: 0 !important;
        width: 80%;
      }
    }

    ${ToolsButton} {
      & > button {
        width: 80%;
        text-align: center;
      }
    }
  }
`;

export const SignUpButton = styled(Button)`
  padding: 15px 34px;
`;

export const CardsWrapper = styled.div`
  margin-top: 10px;
  
  & > div {
    margin-top: 100px;
  }

  @media(max-width: ${sizes.mobile}px) {
    & > div {
      margin-top: 60px;
    }
  }
`;

export const SliderTitle = styled.h2`
  margin-top: 30px;
  font-weight: bold;
  font-size: 34px;
  line-height: 51px;
  color: ${colors.zeus};

  @media(max-width: ${sizes.laptop}px) {
    margin-top: 45px;
    font-size: 22px;
    line-height: 32px;
  }
`;

export const SliderDescription = styled.p`
  margin-top: 9px;
  margin-bottom: 55px;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: ${colors.judgeGray};

  @media(max-width: ${sizes.laptop}px) {
    margin-bottom: 40px;
  }
`;
