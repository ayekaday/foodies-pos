import { useEffect, useState } from "react";
import Layout from "./Layout";
import MenuItem from "./MenuItem";
import NewMenu from "./NewMenu";

export interface Menu {
  id: number;
  name: string;
  price: number;
  isAvailable: boolean;
}

const Orders = () => {
  const [menus, setMenus] = useState<Menu[]>([]);
  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    const response = await fetch("http://localhost:5000");
    const menus: Menu[] = await response.json();
    setMenus(menus);
    console.log(menus);
  };

  /* const createMenu = async () => {
    const response = await fetch("http://localhost:5000");
    const menus: Menu[] = await response.json();
    setMenus(menus);
    console.log(menus);
  }; */

  return (
    <Layout>
      <p>Orders Page</p>

      <div className=" mt-3">
        <NewMenu fetchMenus={fetchMenus} />
        <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
          {menus.map((ele) => {
            return <MenuItem menu={ele} key={ele.id} fetchMenus={fetchMenus} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
