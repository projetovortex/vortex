import iconVortex from "../assets/iconVortex.png"
import modoClaro from "../assets/modoClaro.png"
import modoEscuro from "../assets/modoEscuro.png"
import menu from "../assets/menu.png"
import menuEscuro from "../assets/menuEscuro.png"
import { Link } from "react-router-dom"
import React, { useEffect } from "react"
import { useState } from "react"

export function HeaderLogadoClaro() {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "")

    useEffect(() => {
        localStorage.setItem("theme", theme)
        const tagHTML = document.documentElement
        tagHTML.classList.remove("dark")

        if(theme === "dark") {
            tagHTML.classList.add("dark")
        }
    }, [theme])

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div>
            <header className="px-10 py-5 lg:pb-25 flex justify-between align-middle h-25 font-hanken font-bold text-white text-2xl">

                <div className="flex align-center justify-center gap-3">
                    <Link to={"/"} className="cursor-pointer w-fit"><img className="lg:w-20 lg:h-20 w-15 h-15" src={iconVortex} alt="icone vortex"/></Link>
                    <Link to={"/"} className="lg:text-white text-purple-mobile dark:text-white cursor-pointer lg:pt-6 pt-4">VORTEX</Link>
                </div>
                
                <div className="lg:flex hidden gap-35 pt-6">
                    <Link to={"/Conheca"}>Conheça</Link>
                    <Link to={"/Jogo"}>Jogo</Link>
                    <Link to={"/Aplicativo"}>App</Link>
                    <Link to={"/SobreNos"}>Sobre nós</Link>
                </div>
                
                <div>
                    <button className="lg:block hidden cursor-pointer" onClick={() => setTheme(prevTheme => prevTheme === "dark" ? "" : "dark")}>
                        {theme === "dark" ? (
                            <img className="w-20 h-20" src={modoEscuro} alt="icone modo escuro"/>
                        ) : (
                            <img className="w-20 h-20" src={modoClaro} alt="icone modo claro"/>
                        )}
                    </button>

                    <button className="cursor-pointer pt-5 dark:hidden" onClick={toggleMenu} aria-controls="mobile-menu" aria-expanded={isOpen}>
                        <img className="lg:hidden w-10 h-10" src={menu} alt="menu" />
                    </button>
                    <button className="hidden dark:block cursor-pointer pt-5" onClick={toggleMenu} aria-controls="mobile-menu" aria-expanded={isOpen}>
                        <img className="lg:hidden w-10 h-10" src={menuEscuro} alt="menu" />
                    </button>

                    <div className={`${isOpen ? 'block' : 'hidden'} absolute right-0 z-10 h-screen p-10 w-50vh mt-2 bg-cyan-mobile dark:bg-dark-purple rounded-md shadow-lg lg:hidden`} id="mobile-menu">
                        <div className="text-purple-mobile dark:text-white flex flex-col gap-10" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <Link to={"/Conheca"}>Conheça</Link>
                            <Link to={"/Jogo"}>Jogo</Link>
                            <Link to={"/Aplicativo"}>App</Link>
                            <Link to={"/SobreNos"}>Sobre nós</Link>
                            <button className="cursor-pointer" onClick={() => setTheme(prevTheme => prevTheme === "dark" ? "" : "dark")}>
                                {theme === "dark" ? (
                                    <img className="w-20 h-20" src={modoEscuro} alt="icone modo escuro"/>
                                ) : (
                                    <img className="w-20 h-20" src={modoClaro} alt="icone modo claro"/>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}