import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import PopupModel from "../model/Model";

export default function Nav() {
  const menuItems = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "courses",
      href: "#courses",
    },
    {
      name: "blogs",
      href: "#blogs",
    },
    {
      name: "teachers",
      href: "#teachers",
    },
    {
      name: "courses",
      href: "#courses",
    },
    {
      name: "pricing",
      href: "#pricing",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ]
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="py-4 bg-indigo-950">
      <NavbarContent>
        <NavbarBrand className="flex ">
          <p className=""><img className="" src="https://i.postimg.cc/yx0FMcMF/logo.png" alt="logo" /></p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-5 p-5" justify="center">
        {menuItems.map((menuitem, index) => (
          <NavbarItem key={menuitem.name} className="font-semibold">
            <a color="foreground" href={menuitem.href} className="hover:text-amber-500 transition-all duration-200 text-white uppercase">
              {menuitem.name}
            </a>
          </NavbarItem>
        ))}
        <NavbarItem>
          <PopupModel />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color='foreground'
              className="w-full hover:text-green-500"
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
