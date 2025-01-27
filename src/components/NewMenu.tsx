interface Menu {
  name: string;
  price: number;
  isAvailable: boolean;
}

export function NewMenu() {
  const menu: Menu = {
    name: "",
    price: 0,
    isAvailable: false,
  };

  const handleCreateMenu = () => {
    console.log(menu);
  };

  return (
    <div className="text-[15px] flex flex-col max-w-52 ">
      <input
        type="text"
        placeholder="Name"
        className="border border-[#8D99AE] h-8 p-1 m-1"
        onChange={(evt) => (menu.name = evt.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        className="border border-[#8D99AE] h-8 p-1 m-1"
        onChange={(evt) => (menu.price = Number(evt.target.value))}
      />
      <div>
        <input
          type="checkbox"
          className="size-3 m-1"
          onChange={(evt) => (menu.isAvailable = evt.target.checked)}
        />
        <span>Available</span>
      </div>
      <button
        className="border-[#2B2D42] border w-20 bg-[#8D99AE] text-[#EDF2F4] m-1"
        onClick={handleCreateMenu}
      >
        Create
      </button>
    </div>
  );
}
