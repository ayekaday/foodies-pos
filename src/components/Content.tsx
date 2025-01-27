import { Menu } from "./Menu";
import { NewMenu } from "./NewMenu";

export function Content() {
  return (
    <div className="bg-[#EDF2F4] text-[#2B2D42] w-[100%] p-1 ">
      Menu
      <div>
        <NewMenu />
        <div className="mt-9">
          <Menu />
        </div>
      </div>
    </div>
  );
}
