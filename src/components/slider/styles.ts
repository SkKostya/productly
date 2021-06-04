import styled from "styled-components";

import { colors } from "../../constants";

export const Container = styled.div`
  position: relative;
`;

export const Item = styled.div``;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 45px;
`;

export const Dot = styled.button`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${colors.gallery};

  &.active {
    background: ${colors.orangePeel};
  }

  :not(:last-child) {
    margin-right: 10px;
  }
`;
