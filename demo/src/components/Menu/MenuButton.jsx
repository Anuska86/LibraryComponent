import React from "react";
import "../../index.css";
import Button from "../Button/Button.jsx";
import "../Button/Button.css";
import { MenuContext } from "./Menu.jsx";

export default function MenuButton({ children }) {
  const { toggleOpen } = React.useContext(MenuContext);

  return (
    <Button
      variant="primary"
      size="lg "
      className="menu-button"
      aria-controls="menuId"
      onClick={toggleOpen}
    >
      <span className="sr-only">Toggle Menu</span>
      {children}
    </Button>
  );
}
