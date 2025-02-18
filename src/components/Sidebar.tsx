import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <div className="bg-[#003049] text-[#fdf0d5] h-[100vh] w-[250px] text-[20px] flex flex-col">
      <Link
        to={"/"}
        className="cursor-pointer bg-[#] p-[10px] hover:bg-[#f5f3f4] hover:text-[#001427]"
      >
        Orders
      </Link>
      <Link
        to={"/menu-categories"}
        className="cursor-pointer bg-[#] p-[10px] hover:bg-[#f5f3f4] hover:text-[#001427]"
      >
        Menu Categories
      </Link>
      <Link
        to={"/menus"}
        className="cursor-pointer bg-[#] p-[10px] hover:bg-[#f5f3f4] hover:text-[#001427]"
      >
        Menus
      </Link>
      <Link
        to={"/addon-categories"}
        className="cursor-pointer bg-[#] p-[10px] hover:bg-[#f5f3f4] hover:text-[#001427]"
      >
        Addon Categories
      </Link>
      <Link
        to={"/addon"}
        className="cursor-pointer bg-[#] p-[10px] hover:bg-[#f5f3f4] hover:text-[#001427]"
      >
        Addon
      </Link>
      <Link
        to={"/tables"}
        className="cursor-pointer bg-[#] p-[10px] hover:bg-[#f5f3f4] hover:text-[#001427]"
      >
        Tables
      </Link>
      <Link
        to={"/locations"}
        className="cursor-pointer bg-[#] p-[10px] hover:bg-[#f5f3f4] hover:text-[#001427]"
      >
        Locations
      </Link>
      <Link
        to={"/settings"}
        className="cursor-pointer bg-[#] p-[10px] hover:bg-[#f5f3f4] hover:text-[#001427]"
      >
        Settings
      </Link>
    </div>
  );
}
