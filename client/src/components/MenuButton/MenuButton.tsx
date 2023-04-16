import React from "react";
import { Container, MenuImage, MenuTitle } from "./MenuButton.style";

interface Props {
  title: string;
  path: string;
}

function MenuButton({ title, path }: Props) {
  return (
    <Container>
      <MenuImage src={path} />
      <MenuTitle>{title}</MenuTitle>
    </Container>
  );
}
export default MenuButton;
