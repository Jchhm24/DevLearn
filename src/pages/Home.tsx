import { InputSearch } from "@/components/navbars/InputSearch";
import { Navbar } from "@/components/navbars/Navbar";
import React from "react";

export const Home = () => {
    return (
        <>
            <Navbar />
            <div className="p-8 fixed z-8 w-full hidden max-[994px]:block">
                <InputSearch/>
            </div>
        </>
    );
};
