import React from "react";

import {
  Title,
  Description,
  SubTitle,
  List,
  Item,
  Check
} from "./styles";

interface IFeature {
  title?: string;
  description: string;
}

interface IProps {
  entriesText: string;
  title: string;
  description: string;
  features: IFeature[];
};

const CardInfo = ({ entriesText, title, description, features }: IProps) => {
  return (
    <div>
      <Description>{entriesText}</Description>
      <Title>{title}</Title>
      <Description>{description}</Description>

      <List>
        {features.map((item, i) =>
          item.title 
            ? <Item key={item.title + i}>
                <SubTitle>{item.title}</SubTitle>
                <Description>{item.description}</Description>
              </Item>
            : <Item withoutTitle key={item.description + i}>
                <Check><img src="./images/tick.svg" alt="Error" /></Check>
                <Description>{item.description}</Description>
              </Item>
        )}
      </List>
    </div>
  );
};

export default CardInfo;
