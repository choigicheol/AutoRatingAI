import styled from "styled-components";
import { CenterContainer, ColumnContainer } from "../../styles/commomStyles";

interface ContainerBackgroundColor {
  backgroundColor: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 87vh;
  @media screen and (max-width: 37.5rem) {
    padding: 0 5px 0 5px;
  }
`;

// export const MainContainer = styled(ColumnContainer)`
//   height: 100%;
// `;

export const ListContainer = styled(ColumnContainer)<ContainerBackgroundColor>`
  height: 100%;
  width: 400px;
  background: ${(props) => props.backgroundColor};

  @media screen and (max-width: 37.5rem) {
    padding: 0 5px 0 5px;
  }
`;

export const MenuNav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  margin: 10px 0;
  border-bottom: 1px dashed #6b6b6b;
`;

export const ContentsList = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: scroll;
  padding: 0 20px;
  box-sizing: border-box;
`;
