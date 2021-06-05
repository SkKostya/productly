import styled from "styled-components";

import { colors, sizes } from "../../constants";

export const Title = styled.h2`
  margin: 3px 0 22px;
  font-weight: bold;
  font-size: 36px;
  line-height: 54px;
  color: ${colors.zeus};

  @media(max-width: ${sizes.tablet}px) {
    font-size: 28px;
    line-height: 36px;
  }

  @media(max-width: ${sizes.mobile}px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const List = styled.ul`
  margin-top: 5px;
`;

export const Item = styled.li<{ withoutTitle?: boolean }>`
  margin-top: 25px;

  ${({ withoutTitle }) =>
  withoutTitle && `
    display: flex;
    align-items: center;
  `}

  @media(max-width: ${sizes.mobile}px) {
    margin-top: 14px;
  }
`;

export const SubTitle = styled.h3`
  margin: 25px 0 12px;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  color: ${colors.zeus};

  :first-child {
    margin-top: 30px;
  }

  @media(max-width: ${sizes.mobile}px) {
    margin-top: 18px;

    :first-child {
      margin-top: 24px;
    }
  }
`;

export const Check = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
  min-width: 35px;
  width: 35px;
  height: 35px;
  border-radius: 13.8542px;
  background: ${colors.orangePeel};

  @media(max-width: ${sizes.mobile}px) {
    margin-right: 18px;
  }
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.judgeGray};
`;
