import React from "react";

const MenuContext = React.createContext();

export default function Menu({ children, onOpen }) {
  const [open, toggleOpen] = useToggle({
    intialValue: false,
    onToggle: onOpen,
  });

  return (
    <MenuContext.Provider value={{ open, toggleOpen }}>
      <div className="menu">{children}</div>
    </MenuContext.Provider>
  );
}

export { MenuContext };
