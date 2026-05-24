import { links, type Link } from "@/utils/links";
import { NavLink } from "react-router-dom";

const LinksDesktop = () => {
    return (
        <div className="hidden w-full lg:flex gap-x-20 justify-center items-center text-white">
            {links.map((link) => {
                const { ref, label } = link as Link;
                return <NavLink to={ref} className={({ isActive}) => `capitalize tracking-wide ${isActive ? "underline text-xl" : ""}`}>{label}</NavLink>
            })}
        </div>
    );
};

export default LinksDesktop;