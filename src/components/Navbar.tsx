import LinksDesktop from "./LinksDesktop";


const Navbar = () => {
  return (
    <nav className="bg-black py-4 hidden lg:block">
      <div className="align-element">
        <LinksDesktop />
      </div>
    </nav>
  );
};

export default Navbar;