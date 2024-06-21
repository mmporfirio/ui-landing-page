const NAV_ITEMS = ["Home", "About Us", "Partners", "Donomics"];

export type NavigationItem = {
  label: string;
  onClick: () => void;
};

export { NAV_ITEMS };
