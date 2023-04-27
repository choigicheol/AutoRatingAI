import styled, { keyframes } from "styled-components";
import { CenterContainer, ColumnContainer } from "../../styles/commonStyles";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StoreListContainer = styled(ColumnContainer)`
  display: flex;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 37.5rem) {
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-top: 10px;
`;
