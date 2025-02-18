import { BrowserRouter, Route, Routes } from "react-router-dom";
import Addon from "./Addon";
import AddonCategories from "./AddonCategories";
import Locations from "./Locations";
import Login from "./Login";
import MenuCategories from "./MenuCategories";
import Menus from "./Menus";
import Orders from "./Orders";
import PrivateRoutes from "./PrivateRoutes";
import Register from "./Register";
import Settings from "./Settings";
import Tables from "./Tables";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Orders />} />
            <Route path="/menu-categories" element={<MenuCategories />} />
            <Route path="/menus" element={<Menus />} />
            <Route path="/addon-categories" element={<AddonCategories />} />
            <Route path="/addon" element={<Addon />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
