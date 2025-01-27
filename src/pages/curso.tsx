import { Footer } from "@/components/footer";
import { PlayIcon } from "@/components/icons/PlayIcon";
import { ShoppingCar } from "@/components/icons/ShoppingCar";
import { InputSearch } from "@/components/navbars/InputSearch";
import { Navbar } from "@/components/navbars/Navbar";
import { cursos } from "@/data/constans/cursos";
import type { Curso as ICurso } from "@/interfaces/curso";
import { useParams } from "react-router-dom";

export const Curso = () => {
    const { id } = useParams<{ id: string }>();
    const curso: ICurso = cursos.find(
        (curso: ICurso) => curso.id === parseInt(id || "0")
    ) as ICurso;

    return (
        <>
            <Navbar />
            <div className="p-8 fixed z-8 w-full hidden max-[994px]:block">
                <InputSearch />
            </div>
            <main className="flex flex-row gap-10 px-10 py-26.5 max-[500px]:px-5">
                <article className="flex flex-col gap-4 flex-1 max-[974px]:absolute max-[974px]:mr-10 max-[500px]:mr-5 ">
                    <h2 className="text-4xl font-black tracking-3px">
                        {curso.nombre}
                    </h2>

                    <p className="font-medium tracking-wider">
                        {curso.descripcion}
                    </p>

                    <div className="flex flex-row gap-1 items-center">
                        <PlayIcon className="w-8 h-8" />
                        <span>Duracion: {curso.duracion}</span>
                    </div>

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

                    <section className="flex flex-row gap-4 mt-12 max-[466px]:flex-col">
                        <button className="bg-white text-black font-semibold py-2 px-4 tracking-wider rounded-xl w-max cursor-pointer">
                            Comprar ${curso.precio} MX
                        </button>
                        <button className="flex flex-row items-center gap-2 border-2 border-white py-2 px-4 font-semibold tracking-wider rounded-xl w-max cursor-pointer hover:bg-white hover:text-black group">
                            <ShoppingCar className="w-8 h-8 group-hover:fill-black" />
                            Agregar al carrito
                        </button>
                    </section>
                </article>

                <div className="relative w-[55%] max-[1030px]:w-full max-[974px]:blur-2xl max-[974px]:-z-1 max-[974px]:opacity-75">
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
            </main>

            <Footer />
        </>
    );
};
