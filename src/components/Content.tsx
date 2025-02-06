import { useState } from "react";
import MenuItem from "./MenuItem";
import NewMenu from "./NewMenu";

export interface Menu {
  id: number;
  name: string;
  price: number;
  isAvailable: boolean;
}

const Content = () => {
  const [menus, setMenus] = useState<Menu[]>([]);
  return (
    <div>
      <NewMenu menus={menus} setMenus={setMenus} />
      <div>
        {menus.map((ele) => {
          return <MenuItem menu={ele} key={ele.id} />;
        })}
      </div>
    </div>
  );
};

export default Content;
