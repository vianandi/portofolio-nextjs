import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import React from "react";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-pink-50/20">
      <div className="container mx-auto">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Vianandi<span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex">
          <Nav />
          <Link href="/">
            <Button className="ml-2 h-7">Hire Me</Button>
          </Link>
        </div>
        <div className="xl:hidden">mobile nav</div>
      </div>
    </header>
  );
};

export default Header;