import styled from "styled-components";

import { colors, sizes } from "../../constants";
import { Button } from "../../components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-top: 230px;
  max-height: 230px;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 36px;
  line-height: 54px;
  color: ${colors.zeus};
`;

export const Description = styled.p`
  margin-top: 22px;
  max-width: 540px;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: ${colors.kashmirBlue};
`;

export const CardButton = styled(Button)`
  margin-top: 45px;
  padding: 15px 30px;
`;

export const HeroWrapper = styled.div`
  position: absolute;

  &.contact-card {
    &-1 {
      top: -65px;
      left: -240px;
    }
    &-2 {
      bottom: -65px;
      left: -260px;
    }
    &-3 {
      bottom: -180px;
    }
    &-4 {
      bottom: -30px;
      right: -250px;
    }
    &-5 {
      top: -130px;
      right: -150px;
    }
  }
`;

export const HerosWrapper = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 140px;
  height: 835px;
  background: url(../../../images/contact-card.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;

  @media(max-width: ${sizes.desktop}px) {
    margin-top: 100px;
    background-size: 100% 90%;

    ${HeroWrapper} {
      &.contact-card {
        &-1 {
          top: -65px;
          left: -120px;
        }
        &-2 {
          bottom: -50px;
          left: -140px;
        }
        &-3 {
          bottom: -130px;
          right: -30px;
        }
        &-4 {
          bottom: 25px;
          right: -130px;
        }
        &-5 {
          top: -130px;
          right: -60px;
        }
      }
    }
  }

  @media(max-width: ${sizes.laptop}px) {
    flex-direction: column;
    margin-top: 100px;
    height: auto;
    background-size: 100% 60%;
    background-position: top;

    ${Container} {
      margin-top: 120px;
      max-height: 100%;
      padding: 0 15px;
    }

    ${HeroWrapper} {
      position: static;
    }

    ${HerosWrapper} {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 860px;

      & > div {
        margin-top: 32px;
        width: calc(100% / 2 - 40px / 2);

        :not(:nth-child(2n + 2)) {
          margin-right: 40px;
        }
      }
    }
  }
  
  @media(max-width: ${sizes.laptop}px) {
    background-size: 100% 40%;
  }
  
  @media(max-width: ${sizes.mobileL}px) {
    background-size: 100% 20%;
    margin-top: 60px;

    ${Title} {
      font-size: 28px;
      line-height: 36px;
    }

    ${Description} {
      margin-top: 16px;
    }

    ${CardButton} {
      margin-top: 30px;
      padding: 12px;
      width: 80%;
      text-align: center;
    }

    ${Container} {
      margin-top: 60px;
    }

    ${HerosWrapper} {
      justify-content: flex-start;
      margin-top: 16px;

      & > div {
        margin-top: 32px;
        width: 80%;

        :not(:nth-child(2n + 2)) {
          margin-right: 0;
        }
      }
    }
  }
  
  @media(max-width: ${sizes.mobile}px) {
    background-size: 100% 10%;
    margin-top: 50px;

    ${Title} {
      font-size: 22px;
      line-height: 32px;
    }

    ${Container} {
      margin-top: 50px;
    }

    ${HerosWrapper} {
      justify-content: flex-start;
      margin-top: 16px;

      & > div {
        width: 100%;
      }
    }
  }
`;
