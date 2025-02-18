import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <div className="h-[100vh] ">
      <Topbar />
      <div className="flex h-[90%]">
        {isLoggedIn && <Sidebar />}
        <div className="p-5 w-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
