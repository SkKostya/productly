import React from "react";

import { ImageContainer, Title, Description } from "./styles";

interface IProps {
  image: string;
  title: string;
  description: string;
};

const Tool = ({ image, title, description }: IProps) => {
  return (
    <div>
      <ImageContainer color="#7752BE">
        <img src={image} alt="Error" />
      </ImageContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </div>
  );
};

export default Tool;
