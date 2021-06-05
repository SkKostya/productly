import React from "react";

import { Hero } from "../../components";
import { IProps as IHero } from "../../components/hero/hero";

import {
  Wrapper,
  Container,
  Title,
  Description,
  CardButton,
  HeroWrapper,
  HerosWrapper
} from "./styles";

interface IProps {
  title: string;
  description: string;
  onClick: () => void;
  users: IHero[];
};

const ContactCard = ({ title, description, onClick, users }: IProps) => {
  const currentCountOfUsers = users.length > 5 ? users.slice(0, 5) : users;

  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <CardButton onClick={onClick}>Contact our expert</CardButton>

        <HerosWrapper>
          {currentCountOfUsers.map((item, i) =>
            <HeroWrapper className={"contact-card-" + (i + 1)} key={item.avatar}>
              <Hero {...item} />
            </HeroWrapper>
          )}
        </HerosWrapper>
      </Container>
    </Wrapper>
  );
};

export default ContactCard;
