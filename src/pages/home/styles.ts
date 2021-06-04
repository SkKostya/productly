import styled from "styled-components";

import { sizes, colors } from "../../constants";

export const DesignTools = styled.div`
  margin-top: 110px;
  padding-bottom: 90px;
  background: url(../../../images/tools-bg.png);
  background-size: 100% 60%;
  background-repeat: no-repeat;
  background-position: bottom;
`;

export const DesignInfo = styled.div`
  margin: 0 auto;
  max-width: ${sizes.desktop}px;
  width: 100%;
`;

export const DesignTitle = styled.h2`
  margin: 0 auto;
  max-width: 500px;
  font-weight: bold;
  font-size: 36px;
  line-height: 54px;
  text-align: center;
  color: ${colors.zeus};
`;

export const Tools = styled.div`
  display: flex;
  margin-top: 30px;

  & > div {
    margin-top: 24px;
    width: calc(100%/4 - (45px * 3) / 4);

    &:not(:last-child) {
      margin-right: 45px;
    }
  }
`;

export const ToolsButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 34px;
`;

export const CardsWrapper = styled.div`
  margin-top: 10px;
  
  & > div {
    margin-top: 100px;
  }
`;
