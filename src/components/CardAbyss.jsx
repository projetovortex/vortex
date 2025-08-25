import abyssPerfil from "../assets/abyssPerfil.png"

export function CardAbyss() {
    return(
        <div className="">
            <div className="flex gap-20 bg-linear-to-t to-yellow-abyss from-dark-abyss rounded-3xl p-20 max-w-300 max-h-150">
                <img className="bg-white rounded-2xl" src={abyssPerfil} alt="abyss perfil" />
                <div className="pt-20 font-questrial text-white">
                    <h2 className="pl-5 text-7xl text-yellow-950	 font-questrial pb-5">ABYSS</h2>
                    <p className="text-4xl">Abyss, anomalia das 
                    Fendas Atemporais, vaga 
                    entre eras para restaurar o 
                    equilíbrio ao custo de si 
                    mesmo.</p>
                </div>
            </div>
        </div>
    )
}