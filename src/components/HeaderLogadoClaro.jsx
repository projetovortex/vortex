import iconVortex from "../assets/iconVortex.png"
import modoClaro from "../assets/modoClaro.png"
import { Link } from "react-router-dom"
import React from "react"

export function HeaderLogadoClaro() {
    return(
        <div>
            <header className="px-10 py-5 pb-30 flex justify-between align-middle h-25 font-hanken font-bold text-white text-2xl">

                <div className="flex align-center justify-center gap-3">
                    <Link to={"/"} className="cursor-pointer w-fit"><img className="w-20 h-20" src={iconVortex} alt="icone vortex"/></Link>
                    <Link to={"/"} className="cursor-pointer pt-6">VORTEX</Link>
                </div>
                
                <div className="flex gap-35 pt-6">
                    <Link to={"/Conheca"}>Conheça</Link>
                    <Link to={"/Jogo"}>Jogo</Link>
                    <Link to={"/Aplicativo"}>App</Link>
                    <Link to={"/SobreNos"}>Sobre nós</Link>
                </div>
                
                <div>
                    <button className="cursor-pointer"><img className="w-20 h-20" src={modoClaro} alt="icone modo claro"/></button>
                </div>
            </header>
        </div>
    )
}