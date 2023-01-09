import * as React from "react";
import { navigationMenus } from "../../topLevelRouter";
import { NavBar } from "../NavBar/NavBar";

export interface ILayoutProps {}

export function Layout(props: React.PropsWithChildren<ILayoutProps>) {
  return (
    <>
      <NavBar menus={navigationMenus} />
      <div>{props.children}</div>
    </>
  );
}
