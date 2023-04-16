import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

export const MenuImage = styled.img`
  width: 40px;
  height: 40px;
`;

export const MenuTitle = styled.span`
  margin-top: 10px;
  font-weight: bold;
  font-size: 12px;
  border-radius: 2px;
  padding-bottom: 5px;
  border-bottom: 2px solid tomato;
`;
