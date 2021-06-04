import React from "react";

import {
  Container,
  Message,
  Image
} from "./styles";

interface IProps {
  avatar: string;
  message: string;
  right?: boolean;
};

const Hero = ({ avatar, message, right = false }: IProps) => {
  const text = message.length > 40 ? message.slice(0, 40) + "..." : message;

  return (
    <Container>
      <Image src={avatar} right={right} />
      <Message right={right}>{text}</Message>
    </Container>
  );
};

export default Hero;
