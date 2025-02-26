import { Menu } from "./Menus";

interface Props {
  menu: Menu;
  fetchMenus: () => Promise<void>;
}

const MenuItem = ({ menu, fetchMenus }: Props) => {
  const handleDeleteMenus = async () => {
    await fetch(`http://localhost:5000?id=${menu.id}`, {
      method: "DELETE",
    });
    fetchMenus();
  };
  const { name, price, isAvailable } = menu;
  return (
    <div className="items-center justify-center flex flex-col mr-5 my-5">
      <div className="bg-[#EF233C] text-[#EDF2F4] w-[200px] h-[200px] flex flex-col  justify-center items-center rounded-md  ">
        <p>{name} </p>
        <p>{price} Kyats</p>
        <p>{isAvailable ? "Available" : "Not Available"} </p>
      </div>
      <div>
        <button
          onClick={handleDeleteMenus}
          className="border-gray-600 border w-20 bg-white text-gray-800 my-2 rounded hover:bg-[#6D2323] hover:text-[white] hover:font-bold  "
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
