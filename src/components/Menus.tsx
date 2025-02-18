import { useState } from "react";
import Layout from "./Layout";
import MenuItem from "./MenuItem";
import NewMenu from "./NewMenu";

export interface Menu {
  id: number;
  name: string;
  price: number;
  isAvailable: boolean;
}

const Menus = () => {
  const menusFromStringLocalStorage = localStorage.getItem("menus") as string;
  const menusFromLocalStorage = menusFromStringLocalStorage
    ? JSON.parse(menusFromStringLocalStorage)
    : [];

  const [menus, setMenus] = useState<Menu[]>(menusFromLocalStorage);
  return (
    <Layout>
      <p>Menus Page</p>
      <div className=" mt-3">
        <NewMenu menus={menus} setMenus={setMenus} />
        <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
          {menus.map((ele) => {
            return <MenuItem menu={ele} key={ele.id} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Menus;
