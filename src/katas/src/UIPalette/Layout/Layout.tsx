import * as React from "react";
import { navigationMenus } from "../../topLevelRouter";
import { NavBar } from "../NavBar/NavBar";
import "./Layout.styles.css"

export interface ILayoutProps {}

export function Layout(props: React.PropsWithChildren<ILayoutProps>) {
  return (
    <div className="Layout-Container">
      <NavBar menus={navigationMenus} />
      <div>{props.children}</div>
    </div>
  );
}
