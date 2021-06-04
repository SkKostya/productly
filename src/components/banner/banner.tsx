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

// interface IProps {
  
// };

const Banner = () => {
  return (
    <Container>
      <div>
        <Title>The Design Thinking superpowers</Title>
        <Description>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</Description>
        <ButtonsWrapper>
          <GetStarted>Get started</GetStarted>
          <WatchVideo>
            <img src="./images/play.svg" alt="Error" />
            <VideoLink to="#">Watch the Video</VideoLink>
          </WatchVideo>
        </ButtonsWrapper>
      </div>

      <Image src="./images/banner-image.png" />
    </Container>
  );
};

export default Banner;
