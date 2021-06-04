import React from "react";

import { Container, ImgWrapper, Image, AuthorDate, Title } from "./styles";

export interface IProps {
  image: string;
  author: string;
  date: string;
  title: string;
  link: string;
  isActive: boolean;
};

const SliderItem = ({ image, author, date, title, link, isActive }: IProps) => {
  return (
    <Container>
      <ImgWrapper>
        <Image src={image} />
      </ImgWrapper>

      <AuthorDate>
        By <span>{author} |</span> {date}
      </AuthorDate>

      <Title to={link} activeSlide={isActive}>{title}</Title>
    </Container>
  );
};

export default SliderItem;
