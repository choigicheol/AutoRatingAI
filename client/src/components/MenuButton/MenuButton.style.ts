import styled from "styled-components";

interface Props {
  isMouseOver: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
  padding: 5px;
  height: 60px;
  width: 45px;
`;

export const MenuImage = styled.img<Props>`
  width: ${(props: Props) => (props.isMouseOver ? "40px" : "30px")};
  height: ${(props: Props) => (props.isMouseOver ? "40px" : "30px")};
`;

export const MenuTitle = styled.span<Props>`
  margin-top: 10px;
  font-weight: bold;
  font-size: 12px;
  border-radius: 2px;
  padding-bottom: 5px;
  border-bottom: 2px solid tomato;
`;
