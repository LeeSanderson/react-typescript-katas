import * as React from "react";
import { NavigationMenu } from "../../SharedModels/NavigationMenu";

export interface INavBarProps {
  menus: NavigationMenu[];
}

export function NavBar(props: INavBarProps) {
  return <nav>Nav Bar</nav>;
}
