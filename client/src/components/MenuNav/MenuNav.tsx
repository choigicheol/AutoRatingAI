import React from "react";
import { NavContainer } from "./MenuNav.style";
import MenuButton from "../MenuButton/MenuButton";

interface MenuCategory {
  id: number;
  title: string;
  type: string;
  path: string;
}

interface Props {
  handleMenuButtonClick: (type: string) => void;
}

const menus: MenuCategory[] = [
  { id: 1, title: "한식", type: "한식", path: "./koreanFood.png" },
  { id: 2, title: "양식", type: "양식", path: "./pasta.png" },
  { id: 3, title: "일식", type: "일식", path: "./sushi.png" },
  { id: 4, title: "중식", type: "중식", path: "./noodle.png" },
  { id: 5, title: "분식", type: "분식", path: "./snack.png" },
];

function MenuNav({ handleMenuButtonClick }: Props) {
  return (
    <NavContainer>
      {menus.map((menu) => {
        const { id, type, title, path } = menu;
        return (
          <MenuButton
            key={id}
            type={type}
            title={title}
            path={path}
            handleMenuButtonClick={handleMenuButtonClick}
          ></MenuButton>
        );
      })}
    </NavContainer>
  );
}

export default MenuNav;
