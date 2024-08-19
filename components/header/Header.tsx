import Image from "next/image";
import React from "react";
import logo from "@/app/assets/Manh_logo.svg";
import Link from "next/link";
import { Search } from "lucide-react";
import "./style.css";
function Header() {
  return (
    <header className="flex justify-between">
      <nav className="flex gap-x-3">
        <Image src={logo} alt="logo" width={60} height={20} />
        Duc Manh
      </nav>
      <nav className="flex gap-x-12">
        <Link href="/">Home</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Resume</Link>
      </nav>
      <div className="relative">
        <input
          type="search"
          placeholder="Search..."
          className="bg-transparent border border-green-600 pl-12 py-1"
        />
        <Search className="absolute top-1 left-2 border-r box-content pr-2"/>
        <div className=" absolute bg-green-600 h-full top-0 right-0 flex items-center">
          <div className="triangle_right"></div>
          <p className="px-2 pb-1">Search</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
