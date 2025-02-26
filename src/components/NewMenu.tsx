import { useState } from "react";
import { Menu } from "./Menus";

interface Props {
  fetchMenus: () => Promise<void>;
}

const NewMenu = ({ fetchMenus }: Props) => {
  const defaultMenu = { id: 0, name: "", price: 0, isAvailable: false };
  const [newMenu, setNewMenu] = useState<Menu>(defaultMenu);
  const handleClickMenu = async () => {
    //POST
    await fetch("http://localhost:5000", {
      method: "POST",
      body: JSON.stringify(newMenu),
    });
    fetchMenus();
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newMenu.name}
          className="border border-[#8D99AE] h-8 p-1 m-1"
          onChange={(evt) => {
            setNewMenu({ ...newMenu, name: evt.target.value });
          }}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Price"
          value={newMenu.price}
          className="border border-[#8D99AE] h-8 p-1 m-1"
          onChange={(evt) => {
            setNewMenu({ ...newMenu, price: Number(evt.target.value) });
          }}
        />
      </div>
      <div>
        <input
          type="checkbox"
          checked={newMenu.isAvailable}
          className="size-3 m-1"
          onChange={(evt) => {
            setNewMenu({ ...newMenu, isAvailable: evt.target.checked });
          }}
        />{" "}
        <span>Available</span>
      </div>

      <button
        className="border-gray-600 border w-20 bg-white text-gray-800 m-1"
        onClick={handleClickMenu}
      >
        Create
      </button>
    </div>
  );
};

export default NewMenu;
