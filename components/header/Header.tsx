import Image from "next/image";
import React from "react";
import logo from "@/app/assets/Manh_logo.svg";
import Link from "next/link";
import { Search } from "lucide-react";
import "./style.css";
import NavLink from "./components/NavLink";
function Header() {
  return (
    <header className="flex justify-between items-center">
      <nav className="flex gap-x-3 items-center">
        <Image src={logo} alt="logo" width={60} height={20} />
        <p className=" font-semibold">Duc Manh</p>
      </nav>
      <nav className="flex gap-x-12">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/resume">Resume</NavLink>
      </nav>
      <div className="relative">
        <input
          type="search"
          placeholder="Search..."
          className="bg-transparent border border-emerald-400 pl-12 py-1"
        />
        <Search className="absolute top-1 left-2 border-r box-content pr-2" />
        <div className=" absolute bg-emerald-400 h-full top-0 right-0 flex items-center">
          <div className="triangle_right"></div>
          <p className="px-2 pb-1">Search</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
