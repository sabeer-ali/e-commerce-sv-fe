export type SideNavItem = {
  id: number;
  title: String;
  path: String;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItem?: SideNavItem[];
};
