import { Logo } from "@/components/icons/Logo";
import Navigation from "./Navigation";
// import { ShoppingCar } from "../icons/ShoppingCar";
import { InputSearch } from "./InputSearch";
import "@/assets/styles/Navbar.css";
import { ArrowLeftIcon } from "../icons/ArrowLeftIcon";
import { useIsOpen } from "@/hooks/useIsOpen";
import { useEffect } from "react";

export const Navbar = () => {
    const openNavbar = useIsOpen(true);

    useEffect(() =>{
        const handleResize = () => {
            if(window.innerWidth < 994){
                openNavbar.close()
            }

            if(window.innerWidth > 994){
                openNavbar.open()
            }
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)  
    })

    return (
        <header
            className={`py-4 px-8 border-b-2 border-white/20 flex flex-row gap-8 items-center bg-surface/50 backdrop-blur-md navbar fixed
             transition-transform duration-300 ease-in-out w-full z-10
          ${openNavbar.isOpen ? "translate-x-0" : "translate-x-full"}
        `}>
            <a href="/" className="outline-hidden" >
                <Logo className="h-10"/>
            </a>

            <Navigation />

            <section className="flex flex-row gap-4 ml-auto mr-0 max-[994px]:mx-auto">
                <InputSearch className="max-[994px]:hidden" />

                {/* <a href="/Carrito" className="border-l border-white/20 pl-4">
                    <ShoppingCar className="h-10" />
                </a> */}
            </section>

            <button
                onClick={openNavbar.toggle}
                className="absolute left-0 top-0 bottom-0 my-auto bg-white -translate-x-8 rounded-md outline-hidden h-10">
                <ArrowLeftIcon
                    className={`h-10 transition-transform duration-300 ease-in-out
                      ${openNavbar.isOpen ? "rotate-180" : "rotate-0"}
                    `}
                />
            </button>
        </header>
    );
};
