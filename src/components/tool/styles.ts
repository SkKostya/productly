import styled from "styled-components";

import { colors } from "../../constants";

export const ImageContainer = styled.div<{ color: string; }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 19px;

  ${({ color }) => `
    background: ${color};
    box-shadow: 0 3px 10xp 0 ${color};
  `}
`;

export const Title = styled.h3`
  margin-top: 30px;
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  color: ${colors.zeus};
`;

export const Description = styled.p`
  margin-top: 13px;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: ${colors.judgeGray};
`;