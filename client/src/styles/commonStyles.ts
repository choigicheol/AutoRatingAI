import styled from "styled-components";

export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ColumnContainer = styled(CenterContainer)`
  flex-direction: column;
`;

export const BodyContainer = styled(ColumnContainer)`
  max-width: 500px;
  width: 100%;
  padding: 0 20px;
  background: #ffffff;
  /* background: #f5f5f5; */
`;

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 93vh;
  width: 100%;
  margin-bottom: 20px;

  @media screen and (max-width: 37.5rem) {
  }
`;

export const ListContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
`;

export const ShadowLine = styled.div`
  width: 100%;
  height: 3px;
  background: #e2e2e2;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
  box-sizing: border-box;
`;

export const BlankMessage = styled(ColumnContainer)`
  span {
    font-size: 20px;
    border-radius: 3px;
    border-bottom: 3px solid #2e2e2e;
    height: 100%;
    padding-bottom: 5px;
  }
`;
