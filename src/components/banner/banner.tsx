import React from "react";

import {
  Container,
  Title,
  Description,
  Image,
  ButtonsWrapper,
  GetStarted,
  WatchVideo,
  VideoLink
} from "./styles";

interface IProps {
  title: string;
  description: string;
  onGetStarted: () => void;
  image: string;
  videoLink: string;
};

const Banner = ({ title, description, onGetStarted, image, videoLink }: IProps) => {
  return (
    <Container>
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ButtonsWrapper>
          <GetStarted onClick={onGetStarted}>Get started</GetStarted>
          <WatchVideo>
            <img src="./images/play.svg" alt="Error" />
            <VideoLink to={videoLink}>Watch the Video</VideoLink>
          </WatchVideo>
        </ButtonsWrapper>
      </div>

      <Image src={image} />
    </Container>
  );
};

export default Banner;
