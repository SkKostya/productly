import styled from "styled-components";

export const Container = styled.div<{ reverse?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ reverse }) =>
  reverse && `
    flex-direction: row-reverse;
  `}

  & > div {
    width: 47.5%;
  }

  & > img {
    max-height: 45vw;
  }
`;
