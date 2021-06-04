import styled from "styled-components";
import { Link } from "react-router-dom";

import { Button } from "../../components";

import { sizes, colors } from "../../constants";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 30px auto 0;
  max-width: ${sizes.desktop}px;
  width: 100%;

  & > * {
    flex: 1;
  }
`;

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
