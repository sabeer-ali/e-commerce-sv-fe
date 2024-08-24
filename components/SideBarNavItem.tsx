import { SideNavItem } from "@/types/SideNavbarType";
import Link from "next/link";

export default function SideBarNavItem({ item }: { item: SideNavItem }) {
  return (
    <>
      {item?.submenu ? (
        <div>Submenu</div>
      ) : (
        <Link
          href={item?.path}
          className="text-gray-800 hover:text-gray-300 flex min-h-10"
        >
          {item?.icon}
          <span className="pl-2">{item?.title}</span>
        </Link>
      )}
    </>
  );
}
