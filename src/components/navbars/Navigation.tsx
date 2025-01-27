import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navigation() {

    const {pathname} = useLocation();

    return (
        <nav className="flex flex-row gap-4 max-[994px]:flex-col">
            <NavLink to="/" className="nav-link group">
                Home
                <span className={`span-link-hover-effect group-hover:w-full
                    ${pathname === "/" && "w-full"}    
                `}></span>
            </NavLink>
            <NavLink to="/contacto" className="nav-link group">
                Contacto
                <span className={`span-link-hover-effect group-hover:w-full
                    ${pathname === "/categorias" && "w-full"}    
                `}></span>
            </NavLink>
        </nav>
    );
}
