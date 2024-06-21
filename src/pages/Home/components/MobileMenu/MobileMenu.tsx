import { NavigationItem } from "../../Home.constants";
import { useState } from "react";
import {
  CloseButton,
  InnerContainer,
  Line,
  LogoMenuImg,
  MenuHeadContainer,
  MenuItem,
  MenuItemsContainer,
} from "./MobileMenu.styles";
import { slide as Menu } from "react-burger-menu";
import XIcon from "../../../../assets/svg/XIcon";
import { LogoBrandName } from "../../../../assets/images";

type MobileMenuProps = {
  menuItems: NavigationItem[];
};

const MobileMenu = ({ menuItems }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleState = () => setIsOpen(!isOpen);
  const handleMenu = (onClick: () => void) => {
    setIsOpen(false);
    onClick();
  };

  return (
    <Menu
      right
      isOpen={isOpen}
      onOpen={toggleState}
      onClose={toggleState}
      width={"100%"}
      styles={{
        bmMenu: {
          backgroundColor: "#fff",
          position: "fixed",
          right: "0",
          left: "0",
          top: "0",
        },
        bmBurgerBars: {
          backgroundColor: "#fff",
        },
        bmBurgerButton: {
          position: "absolute",
          right: "5%",
          top: "47px",
          height: "30px",
          width: "30px",
        },
      }}
    >
      <InnerContainer>
        <MenuHeadContainer>
          <LogoMenuImg src={LogoBrandName} />
          <CloseButton onClick={() => setIsOpen(false)}>
            <XIcon />
          </CloseButton>
        </MenuHeadContainer>
        <MenuItemsContainer>
          {menuItems.map(({ onClick, label }) => (
            <>
              <MenuItem key={label} onClick={() => handleMenu(onClick)}>
                {label}
              </MenuItem>
              <Line />
            </>
          ))}
        </MenuItemsContainer>
      </InnerContainer>
    </Menu>
  );
};

export default MobileMenu;
