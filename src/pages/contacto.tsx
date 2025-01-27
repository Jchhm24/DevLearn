import { Footer } from "@/components/footer";
import { DiscordIcon } from "@/components/icons/DiscordIcon";
import { XIcon } from "@/components/icons/XIcon";
import { YoutubeIcon } from "@/components/icons/YoutubeIcon";
import { InputSearch } from "@/components/navbars/InputSearch";
import { Navbar } from "@/components/navbars/Navbar";
import React from "react";

export const Contacto = () => {
    return (
        <>
            <Navbar />
            <div className="p-8 fixed z-8 w-full hidden max-[994px]:block">
                <InputSearch />
            </div>

            <main className="py-26.5 px-5 flex flex-col gap-4 items-center">
                <section className="flex flex-col gap-4" >
                    <article>
                        <h2 className="text-4xl font-black tracking-3px text-center" >¿Quieres contactarte conmigo?</h2>

                        <p className="mt-4 text-center font-semibold" >
                            Va que va, puedes hacerlo no seas tímido, puedes
                            hacerlo a través de los siguientes medios:
                        </p>
                    </article>
                    <div className="flex justify-center space-x-4">
                      <a href="#" className="border-2 border-white p-2 rounded-xl" >
                        <DiscordIcon className="w-8 h-8" />
                      </a>
                      <a href="#" className="border-2 border-white p-2 rounded-xl" >
                        <XIcon className="w-8 h-8" />
                      </a>  
                    </div>
                </section>

                <section className="flex flex-col gap-4 items-center" >
                    <p className="text-center font-semibold" >Y tambien no olvides seguirme en Youtube :)</p>
                    <a href="#" className="border-2 border-white p-2 rounded-xl w-min" >
                      <YoutubeIcon className="w-8 h-8" />
                    </a>
                </section>
            </main>

            <div className="absolute bottom-0 w-full" >
              <Footer />
            </div>
        </>
    );
};
