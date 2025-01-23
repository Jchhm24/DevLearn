import React from "react";
import { SearchIcon } from "../icons/SearchIcon";

type Props = {
    className?: string;
}

export const InputSearch = (props : Props) => {
    return (
        <div className={`flex flex-row rounded-full border border-white/20 overflow-hidden ${props.className}`}>
            <input
                className="bg-surface px-4 w-full placeholder:text-white/50 text-white/80"
                type="text"
                name=""
                id=""
                placeholder="Buscar curso..."
            />

            <div className="flex-1 py-2 px-2.5 bg-surface border-l border-white/20">
                <SearchIcon/>
            </div>
        </div>
    );
};
