import React, { useState } from "react";
import { Container, MenuImage, MenuTitle } from "./MenuButton.style";

interface Props {
  title: string;
  type: string;
  path: string;
  handleMenuButtonClick: (type: string) => void;
}

function MenuButton({ title, type, path, handleMenuButtonClick }: Props) {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  return (
    <Container
      onMouseOver={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      onClick={() => handleMenuButtonClick(type)}
    >
      <MenuImage src={path} isMouseOver={isMouseOver} />
      <MenuTitle isMouseOver={isMouseOver}>{title}</MenuTitle>
    </Container>
  );
}
export default MenuButton;
