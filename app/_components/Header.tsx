"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import { Button } from "@nextui-org/button";

function Header() {
  const MenuList = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Create Verse",
      path: "/create-verse",
    },
    {
      name: "Explore Verse",
      path: "/explore",
    },
    {
      name: "Contact Us",
      path: "/contact-us",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar maxWidth="full" onMenuOpenChange={setIsMenuOpen}>
      <NavbarMenuToggle 
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      className="sm:hidden"
      />
      <NavbarContent>
        <NavbarBrand>
          {/* <Image src="/logo.svg" alt="logo" width={40} height={40} /> */}
          <h2 className="font-bold text-2xl text-primary ml-3 ">VerseCraft</h2>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center" className="hidden sm:flex">
        {MenuList.map((item, index) => (
          <NavbarItem key={index} className="text-xl text-primary font-medium hover:underline mx-2">
            <Link href={item.path}>{item.name}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <Button color="primary">Get Started</Button>
      </NavbarContent>
      <NavbarMenu>
        {MenuList.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link href={item.path}>{item.name}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;
