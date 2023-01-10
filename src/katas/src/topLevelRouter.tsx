import { createBrowserRouter } from "react-router-dom";
import { CalculatorPage } from "./Views/Calculator/CalculatorPage";
import { NavigationMenu } from "./SharedModels/NavigationMenu";
import { NotFoundPage } from "./Views/NotFound/NotFoundPage";
import { HomePage } from "./Views/Home/HomePage";
import { Layout } from "./UIPalette/Layout/Layout";

export const navigationMenus: NavigationMenu[] = [
  {
    menuItemName: "Home",
    path: "/",
    element: <HomePage />,
  },
  {
    menuItemName: "Calculator",
    path: "/Calculator",
    element: <CalculatorPage />,
  },
];

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: navigationMenus
      .map((menu) => ({ path: menu.path, element: menu.element }))
      .concat([
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ]),
  },
]);
