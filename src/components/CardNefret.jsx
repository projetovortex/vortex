import nefretPerfil from "../assets/nefretPerfil.png"

export function CardNefret() {
    return(
        <div className="">
            <div className="flex gap-20 bg-linear-to-t to-yellow-nefret from-dark-nefret rounded-3xl p-20 max-w-300 max-h-150">
                <img className="bg-white rounded-2xl" src={nefretPerfil} alt="nefret perfil" />
                <div className="pt-20 font-questrial text-white">
                    <h2 className="pl-5 text-7xl text-yellow-700 font-questrial pb-5">NEFRET</h2>
                    <p className="text-4xl">Nefret, mago egípcio 
                    arrogante, busca provar 
                    sua grandeza e descobrir 
                    quem realmente é.</p>
                </div>
            </div>
        </div>
    )
}