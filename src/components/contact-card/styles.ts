import styled from "styled-components";

import { colors } from "../../constants";
import { Button } from "../../components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 140px;
  height: 835px;
  background: url(../../../images/contact-card.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

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
