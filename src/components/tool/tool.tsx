import React from "react";

import { ImageContainer, Title, Description } from "./styles";

interface IProps {
  image: string;
  title: string;
  color: string;
  description: string;
};

const Tool = ({ image, title, color, description }: IProps) => {
  return (
    <div>
      <ImageContainer color={color}>
        <img src={image} alt="Error" />
      </ImageContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </div>
  );
};

export default Tool;
