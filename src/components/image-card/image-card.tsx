import React from "react";

import { Container } from "./styles";

interface IProps {
  children: JSX.Element;
  reverse?: boolean;
  image: string;
};

const ImageCard = ({ children, reverse, image }: IProps) => {
  return (
    <Container reverse={reverse}>
      <div>{children}</div>
      <img src={image} alt="Error" />
    </Container>
  );
};

export default ImageCard;
