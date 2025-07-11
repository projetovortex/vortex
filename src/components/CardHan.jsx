import hanPerfil from "../assets/hanPerfil.png"

export function CardHan() {
    return(
        <div>
            <div className="flex gap-20 bg-red-400 rounded-3xl p-20 max-w-300 max-h-150">
                <img className="bg-white rounded-2xl" src={hanPerfil} alt="nymeria perfil" />
                <div className="pt-20 font-questrial text-white">
                    <h2 className="pl-5 text-7xl text-red-900 font-questrial pb-5">HAN</h2>
                    <p className="text-4xl">Han, interesseiro soldado 
                    das dungeons do inferno, 
                    aproveita das fendas 
                    temporais para buscar seu 
                    irmão perdido.</p>
                </div>
            </div>
        </div>
    )
}