import styled from "styled-components";

export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ColumnContainer = styled(CenterContainer)`
  flex-direction: column;
`;

export const ListContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: scroll;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const ShadowLine = styled.div`
  width: 100%;
  height: 3px;
  background: #e2e2e2;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export const BlankMessage = styled.div`
  font-size: 20px;
  padding-bottom: 5px;
  border-radius: 3px;
  border-bottom: 3px solid #2e2e2e;
`;
