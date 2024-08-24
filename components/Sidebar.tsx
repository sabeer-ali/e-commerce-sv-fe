import { SIDEBAR_LIST } from "@/constants/SidebarList";
import Image from "next/image";
import SideBarNavItem from "./SideBarNavItem";

export default function Sidebar() {
  return (
    <aside className="bg-green-500 w-2/12 min-h-screen">
      <section className="flex justify-center">
        <Image
          src={"/icons/qasis-logo.png"}
          className=""
          height={120}
          width={120}
          alt="qasis logo"
        />
      </section>

      <nav className="flex flex-col gap-2 transition ease-in-out p-5">
        {SIDEBAR_LIST?.map((item) => (
          <SideBarNavItem item={item} key={item?.id} />
        ))}
      </nav>
    </aside>
  );
}
