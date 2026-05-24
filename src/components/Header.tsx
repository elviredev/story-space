import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg"
import type { ReactNode } from "react";

const Header = (): ReactNode => {
  return (
    <header className="bg-black">
      <div className="align-element grid grid-cols-2 md:grid-cols-3 py-2">
        <Link to="/" className="justify-self-start self-center">
          <h1 className="mars-font text-sm sm:text-lg pt-2 tracking-[0.5rem] sm:tracking-[0.8rem] text-white">storySpace</h1>
        </Link>
        <Link to="/" className="justify-self-end self-center md:justify-self-center">
          <img src={logo} alt="logo-top" className="h-12 w-12 object-fit-cover" />
        </Link>
      </div>
    </header>
  );
};

export default Header;