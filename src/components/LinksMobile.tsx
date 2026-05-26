import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { links, type Link } from "@/utils/links";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

const LinksMobile = () => {
    return <DropdownMenu>
        <DropdownMenuTrigger
            render={
                <Button
                    variant="outline"
                    size="icon"
                    className="lg:hidden"
                >
                    <MenuIcon />
                </Button>
            }
        />
        <DropdownMenuContent className="lg:hidden min-w-56" align="start" sideOffset={10}>
            {links.map((link) => {
                const { ref, label } = link as Link;
                return (
                    <DropdownMenuItem
                        key={label}
                        className="hover:bg-accent hover:text-accent-foreground cursor-pointer"
                    >
                        <NavLink
                            to={ref}
                            className={({ isActive }) =>
                                `block w-full rounded-sm px-2 py-1 capitalize tracking-wide whitespace-nowrap transition-colors ${isActive
                                    ? "bg-accent text-accent-foreground font-medium"
                                    : "font-light hover:bg-accent"
                                }`
                            }
                        >
                            {label}
                        </NavLink>
                    </DropdownMenuItem>
                )
            })}
        </DropdownMenuContent>
    </DropdownMenu>
};

export default LinksMobile;