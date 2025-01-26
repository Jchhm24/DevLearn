import React from "react";
import { useLocation } from "react-router-dom";

export default function Navigation() {

    const {pathname} = useLocation();

    return (
        <nav className="flex flex-row gap-4 max-[994px]:flex-col">
            <a href="/" className="nav-link group">
                Home
                <span className={`span-link-hover-effect group-hover:w-full
                    ${pathname === "/" && "w-full"}    
                `}></span>
            </a>
            <a href="/AboutMe" className="nav-link group">
                Sobre mi
                <span className={`span-link-hover-effect group-hover:w-full
                    ${pathname === "/categorias" && "w-full"}    
                `}></span>
            </a>
        </nav>
    );
}
