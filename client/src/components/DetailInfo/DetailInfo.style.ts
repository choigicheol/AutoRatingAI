import styled from "styled-components";
import { CenterContainer, ColumnContainer } from "../../styles/commonStyles";

export const Container = styled(ColumnContainer)`
  width: 100%;
  padding: 10px 0;
  z-index: 1;
`;

export const Title = styled(CenterContainer)``;

export const OpenModalButton = styled(CenterContainer)`
  width: 100px;
  height: 30px;
  cursor: pointer;
  border-radius: 8px;
  background: tomato;
  user-select: none;
  margin: 10px 0;

  span {
    color: #ffffff;
  }
`;

export const StoreName = styled.span`
  margin: 10px 0;
  font-size: 25px;
  color: tomato;
`;

export const SubName = styled.span`
  font-size: 16px;
  color: #929292;
  margin-left: 10px;
`;

export const Address = styled(CenterContainer)`
  margin: 10px 0;
  font-size: 12px;
  img {
    width: 13px;
    margin-right: 5px;
  }
`;
