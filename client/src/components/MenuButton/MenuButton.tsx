import React from "react";
import { Container, MenuImage, MenuTitle } from "./MenuButton.style";

interface Props {
  title: string;
  type: string;
  path: string;
  handleMenuButtonClick: (type: string) => void;
}

function MenuButton({ title, type, path, handleMenuButtonClick }: Props) {
  return (
    <Container onClick={() => handleMenuButtonClick(type)}>
      <MenuImage src={path} />
      <MenuTitle>{title}</MenuTitle>
    </Container>
  );
}
export default MenuButton;
