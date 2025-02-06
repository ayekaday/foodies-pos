import { Menu } from "./Content";

interface Props {
  menu: Menu;
}

const MenuItem = ({ menu }: Props) => {
  const { name, price, isAvailable } = menu;
  return (
    <div>
      <div className="bg-[#EF233C] text-[#EDF2F4] w-[200px] h-[200px] flex flex-col  justify-center items-center rounded-md my-5 mr-5 ">
        <p>{name} </p>
        <p>{price} Kyats</p>
        <p>{isAvailable ? "Available" : "Not Available"} </p>
      </div>
    </div>
  );
};

export default MenuItem;
