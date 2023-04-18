import styled from "styled-components";
import { CenterContainer, ColumnContainer } from "../../styles/commomStyles";

export const Container = styled(ColumnContainer)`
  margin: 10px 0;
`;

export const OpenModalButton = styled(CenterContainer)`
  width: 100px;
  height: 30px;
  cursor: pointer;
  border-radius: 8px;
  background: tomato;
  user-select: none;

  span {
    color: #ffffff;
  }
`;
