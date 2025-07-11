import nymeriaPerfil from "../assets/nymeriaPerfil.png"

export function CardNymeria() {
    return(
        <div>
            <div className="flex gap-20 bg-teal-200 rounded-3xl p-20 max-w-300 max-h-150">
                <img className="bg-white rounded-2xl" src={nymeriaPerfil} alt="nymeria perfil" />
                <div className="pt-20 font-questrial text-white">
                    <h2 className="pl-5 text-7xl text-violet-800 font-questrial pb-5">NYMERIA</h2>
                    <p className="text-4xl">Nymeria, a aprendiz do
                    mago, é uma maga
                    habilidosa e ladina, busca
                    os fragmentos pelo Vortex
                    para fechar as fendas
                    temporais.</p>
                </div>
            </div>
        </div>
    )
}