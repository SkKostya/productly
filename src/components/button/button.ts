import styled from "styled-components";

import { colors } from "../../constants";

const Button = styled.button`
  display: block;
  padding: 11px 24px;
  border: 1px solid ${colors.orangePeel};
  box-sizing: border-box;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  background-color: ${colors.orangePeel};
  color: ${colors.white};
`;


export default Button;
