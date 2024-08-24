import { SideNavItem } from "@/types/SideNavbarType";
import { NAVIGATION_LIST } from "./NavigationList";
import {
  SlBag,
  SlGrid,
  SlOrganization,
  SlPresent,
  SlSocialDropbox,
  SlUser,
} from "react-icons/sl";

export const SIDEBAR_LIST: SideNavItem[] = [
  {
    id: 1,
    path: NAVIGATION_LIST.dashboard,
    title: "Dashboard",
    icon: <SlGrid size={23} />,
  },
  {
    id: 2,
    path: NAVIGATION_LIST.category,
    title: "Category Management",
    icon: <SlOrganization size={23} />,
  },
  {
    id: 3,
    path: NAVIGATION_LIST.products,
    title: "Product Management",
    icon: <SlSocialDropbox size={23} />,
  },
  {
    id: 4,
    path: NAVIGATION_LIST.inventory,
    title: "Inventory Management",
    icon: <SlBag size={23} />,
  },
  {
    id: 5,
    path: NAVIGATION_LIST.user,
    title: "User Management",
    icon: <SlUser size={23} />,
  },
  {
    id: 6,
    path: NAVIGATION_LIST.offer,
    title: "Offer Management",
    icon: <SlPresent size={23} />,
  },
];
