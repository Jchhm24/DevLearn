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
            <a href="/categorias" className="nav-link group">
                Categorias
                <span className={`span-link-hover-effect group-hover:w-full
                    ${pathname === "/categorias" && "w-full"}    
                `}></span>
            </a>
            <a href="/servicios" className="nav-link group">
                Servicios
                <span className={`span-link-hover-effect group-hover:w-full
                    ${pathname === "/servicios" && "w-full"}    
                `}></span>
            </a>
            {/* <a href="/Portafolio">
            Portafolio
        </a> */}
            <a href="/precios" className="nav-link group">
                Precios
                <span className={`span-link-hover-effect group-hover:w-full
                    ${pathname === "/precios" && "w-full"}    
                `}></span>            </a>
            {/* <a href="/Nosotros">
            Nosotros
        </a> */}
            <a href="/blog" className="nav-link group">
                Blog
                <span className={`span-link-hover-effect group-hover:w-full
                    ${pathname === "/blog" && "w-full"}    
                `}></span>
            </a>
            <a href="/contacto" className="nav-link group">
                Contacto
                <span className={`span-link-hover-effect group-hover:w-full
                    ${pathname === "/contacto" && "w-full"}    
                `}></span>
            </a>
        </nav>
    );
}
