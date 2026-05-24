import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg"
import type { ReactNode } from "react";
import LinksMobile from "./LinksMobile";

const Header = (): ReactNode => {
  return (
    <header className="bg-black">
      <div className="align-element flex items-center justify-between py-2">

        <Link to="/" className="shrink-0">
          <h1 className="mars-font text-sm sm:text-lg pt-2 tracking-[0.3rem] sm:tracking-[0.8rem] text-white">storySpace</h1>
        </Link>

        <Link to="/" className="hidden min-[450px]:block">
          <img
            src={logo}
            alt="logo-top"
            className="h-12 w-12 object-fit-cover"
          />
        </Link>

        <div className="lg:hidden ml-3 shrink-0">
          <LinksMobile />
        </div>
        
      </div>
    </header>
  );
};

export default Header;