import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Calculator } from "./Views/Calculator/Calculator";
import { NavigationMenu } from "./SharedModels/NavigationMenu";
import { NotFound } from "./Views/NotFound/NotFound";

export const navigationMenus: NavigationMenu[] = [
  { menuItemName: "Home", path: "/", element: <App /> },
  { menuItemName: "Calculator", path: "/Calculator", element: <Calculator /> },
];

export const router = createBrowserRouter(
  navigationMenus
    .map((menu) => ({ path: menu.path, element: menu.element }))
    .concat([
      {
        path: "*",
        element: <NotFound />,
      },
    ])
);
