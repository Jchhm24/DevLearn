import React, { useEffect, useTransition } from "react";
import { CloseIcon } from "./icons/CloseIcon";
import { VisaIcon } from "./icons/VisaIcon";
import { MasterCard } from "./icons/MasterCard";

type Props = {
    nombre: string;
    precio: number;
    isOpen: boolean;
    onClose: () => void;
};

export const PayPanel = (props: Props) => {
    const [isPending, startTransition] = useTransition();

    const handleClose = () => {
        startTransition(() => {
            props.onClose();
        });
    };

    const handlePay = () => {
        startTransition(() => {
            props.onClose();
            window.alert("Pago exitoso");
        });
    };

    useEffect(() => {
        const closePanel = () => {
            startTransition(() => {
                props.onClose();
            });
        };

        window.addEventListener("click", (e) => {
            const target = e.target as HTMLElement;

            if (target.classList.contains("fixed")) {
                closePanel();
            }
        });

        return () => {
            window.removeEventListener("click", closePanel);
        };
    });

    return (
        <div
            className={`fixed bottom-0 h-screen w-full z-20 backdrop-blur-lg flex flex-col items-center justify-end
                transition-opacity duration-300 ease-in-out px-5
                ${
                    props.isOpen
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                }`}>
            <form
                className={`bg-white rounded-t-3xl p-5 max-w-[550px] flex flex-col gap-4
                    transition-transform duration-300 ease-in-out
                    ${props.isOpen ? "translate-y-0" : "translate-y-full"}`}>
                <section className="flex flex-row items-center justify-between">
                    <h4 className="text-black font-bold">{props.nombre}</h4>

                    <button
                        onClick={handleClose}
                        type="button"
                        className="cursor-pointer outline-hidden">
                        <CloseIcon className="w-8 h-8" />
                    </button>
                </section>
                <span className="text-black font-semibold">
                    Total: ${props.precio} MX
                </span>

                <section className="flex flex-row items-center justify-between max-[510px]:flex-col max-[550px]:items-start">
                    <span className="text-black font-semibold">
                        Metodo de pago: Tarjeta de debito o credito
                    </span>

                    <div className="flex flex-row gap-4">
                        <VisaIcon className="w-8 h-8" />
                        <MasterCard className="w-8 h-8" />
                    </div>
                </section>

                <section className="flex flex-col gap-4">
                    <div className="relative">
                        <label
                            htmlFor="name"
                            className="text-black font-semibold p-1 bg-white absolute -translate-y-4 ml-4">
                            Nombre del titular
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-3 border border-black text-black rounded"
                        />
                    </div>

                    <div className="relative">
                        <label
                            htmlFor="number"
                            className="text-black font-semibold p-1 bg-white absolute -translate-y-4 ml-4">
                            Numero de tarjeta
                        </label>
                        <input
                            type="text"
                            id="number"
                            className="w-full p-3 border border-black text-black rounded"
                        />
                    </div>

                    <div className="flex flex-row gap-4 max-[476px]:flex-col">
                        <div className="relative">
                            <label
                                htmlFor="date"
                                className="text-black font-semibold p-1 bg-white absolute -translate-y-4 ml-4">
                                Fecha de expiracion
                            </label>
                            <input
                                type="text"
                                id="date"
                                className="w-full p-3 border border-black text-black rounded"
                            />
                        </div>

                        <div className="relative">
                            <label
                                htmlFor="cvv"
                                className="text-black font-semibold p-1 bg-white absolute -translate-y-4 ml-4">
                                CVV
                            </label>
                            <input
                                type="text"
                                id="cvv"
                                className="w-full p-3 border border-black text-black rounded"
                            />
                        </div>
                    </div>
                </section>

                <button
                    onClick={handlePay}
                    className="bg-black text-white font-semibold py-2 rounded w-2/4 px-4  cursor-pointer mx-auto">
                    Pagar
                </button>
            </form>
        </div>
    );
};
