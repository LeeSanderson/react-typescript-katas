import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavigationMenu } from "../../SharedModels/NavigationMenu";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";

export interface INavBarProps {
  menus: NavigationMenu[];
}

export function NavBar(props: INavBarProps) {
  const { menus } = props;
  const currentPath = useLocation().pathname;
  const getMenuItemClasses = (menuPath: string) =>
    cn("px-3 py-2 rounded-md text-base font-medium", {
      "bg-gray-900 text-white": menuPath === currentPath,
      "text-gray-300 hover:bg-gray-700 hover:text-white":
        menuPath !== currentPath,
    });

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile burger menu button (hidden on screens > 640px) */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Brand / Logo - possibly switch/resize image based on screen resolution? using block/hidden lg:hidden/lg:block classes */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
              </div>

              {/* Menu items for large screens */}
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {menus.map((menu) => (
                    <Link
                      key={menu.menuItemName}
                      to={menu.path}
                      className={getMenuItemClasses(menu.path)}
                    >
                      {menu.menuItemName}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {menus.map((menu) => (
                <Disclosure.Button
                  key={menu.menuItemName}
                  as={Link}
                  to={menu.path}
                  className={getMenuItemClasses(menu.path) + " block"}
                >
                  {menu.menuItemName}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    /*
    <nav className="sticky top-0 w-full border-b-2 z-50">
      <div className="flex flex-row py-1 items-center">
        <div className="basis-1/3">first</div>
        <div className="basis-1/3">first</div>
        <div className="basis-1/3">first</div>
      </div>
    </nav>*/
  );
}
