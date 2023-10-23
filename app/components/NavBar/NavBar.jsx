"use client";
import "./NavBar.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  const isActive = (route) => (pathname === route ? "active" : "");

  return (
    <div className="NavBarContainer">
      <Link className={isActive("/")} href="/">
        Home
      </Link>
      <Link className={isActive("/about")} href="/about">
        About
      </Link>
      <Link className={isActive("/works")} href="/about">
        Works
      </Link>
      <Link className={isActive("/contactme")} href="/about">
        Contact Me
      </Link>
    </div>
  );
};

export default NavBar;
