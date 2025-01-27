import { InputSearch } from "@/components/navbars/InputSearch";
import { Navbar } from "@/components/navbars/Navbar";
import { cursos } from "@/data/constans/cursos";
import { Curso } from "@/interfaces/curso";
import React from "react";
import { NavLink } from "react-router-dom";
import "@/assets/styles/gradients.css";

export const Home = () => {
    const cursosFound: Curso[] = cursos;

    return (
        <>
            <Navbar />
            <div className="p-8 fixed z-8 w-full hidden max-[994px]:block">
                <InputSearch />
            </div>

            <main className="flex flex-col gap-4">
                <div className="h-[400px] w-full absolute -z-1 media-radial-gradient-top"></div>

                <section className="flex flex-col items-center gap-4 justify-center h-screen p-5">
                    <div className="flex flex-col items-center">
                        <img
                            src="../../public/dev-learn-logo-icon.svg"
                            alt="Logo de Dev Learn"
                            className="w-[100px]"
                        />
                        <h1 className="text-6xl font-bold tracking-3px text-center">
                            Dev Learn
                        </h1>
                    </div>
                    <p className="font-semibold tracking-wider text-center">
                        Aprende programación de una forma sencilla y facil
                    </p>

                    <a
                        href="#cursos"
                        className="bg-white text-black font-semibold py-1 px-4 tracking-wider rounded-full w-max    ">
                        Empezar ahora
                    </a>
                </section>

                <section id="cursos" className="grid grid-cols-2 gap-8 mt-10 px-28 max-[1302px]:px-20 max-[1228px]:px-10 max-[755px]:grid-cols-1 max-[755px]:px-20 max-[480px]:px-10 max-[320px]:px-5">
                    {cursosFound.map((curso: Curso) => (
                        <div
                            key={curso.id}
                            className="border-2 border-white/20 p-6 rounded-4xl flex flex-row gap-6 max-[1030px]:flex-col">
                            <div className="relative w-[55%] max-[1030px]:w-full">
                                <img
                                    src={curso.miniatura}
                                    alt={curso.nombre}
                                    className="object-cover rounded-2xl w-full"
                                />
                                <img
                                    src={curso.miniatura}
                                    alt={curso.nombre}
                                    className="absolute top-0 blur-2xl object-cover rounded-2xl -z-1 opacity-90 w-full"
                                />
                            </div>
                            <article className="flex flex-col gap-2 flex-1">
                                <h3 className="text-xl font-bold tracking-wider">
                                    {curso.nombre}
                                </h3>

                                <div className="flex flex-row gap-2 items-center">
                                    <img
                                        src={curso.fotoAutor}
                                        alt={curso.autor}
                                        className="w-8 h-8 rounded-full"
                                    />
                                    <span className="font-medium tracking-wider">
                                        Por: {curso.autor}
                                    </span>
                                </div>

                                <NavLink
                                    to={`/curso/${curso.id}`}
                                    className="bg-white text-black font-semibold py-1 px-4 tracking-wider rounded-full w-max mx-0 ml-auto my-0 mt-auto">
                                    Ver más
                                </NavLink>
                            </article>
                        </div>
                    ))}
                </section>
            </main>
        </>
    );
};
