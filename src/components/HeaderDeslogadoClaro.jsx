import iconVortex from "../assets/iconVortex.png"
import modoClaro from "../assets/modoClaro.png"
import iconContaClaro from "../assets/iconContaClaro.png"

export function HeaderDeslogadoClaro() {
    return(
        <div>
            <header className="px-10 py-5 pb-30 flex justify-between align-middle h-25 font-hanken font-bold text-white text-2xl">

                <div className="flex align-center justify-center gap-3">
                    <button className="cursor-pointer w-fit"><img className="w-20 h-20" src={iconVortex} alt="icone vortex"/></button>
                    <button className="cursor-pointer pt-6">VORTEX</button>
                </div>

                <div className="flex gap-10">
                    <div className="flex justify-end gap-10 pt-6">
                        <a href="">Fazer Login</a>
                        <a href="">Criar Conta</a>
                    </div>
                    
                    <div>
                        <button className="cursor-pointer"><img className="w-20 h-20" src={modoClaro} alt="icone modo claro"/></button>
                        <button><img className="cursor-pointer w-20 h-20" src={iconContaClaro} alt="icone conta claro"/></button>
                    </div>
                </div>
                
                
            </header>
        </div>
    )
}