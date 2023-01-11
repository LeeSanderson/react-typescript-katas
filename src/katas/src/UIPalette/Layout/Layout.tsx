import { Outlet } from "react-router-dom";
import { navigationMenus } from "../../topLevelRouter";
import { NavBar } from "../NavBar/NavBar";

export function Layout() {
  return (
    <>
      <NavBar menus={navigationMenus} />
      <Outlet />
    </>
  );
}
