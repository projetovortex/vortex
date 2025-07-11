import imagemJogo from "../assets/imagemJogo.png"

export function Jogo() {
    return(
        <div className="flex flex-col items-center">
            <h1 className="text-8xl text-indigo-950 font-questrial pb-5">Conheça nosso jogo</h1>

            <div className="flex gap-40 font-questrial text-white">
                <p className="text-3xl pt-30">Um mago causa fendas no <br />
                tempo ao tentar criar energia <br />
                eterna. Agora, heróis devem <br />
                reunir fragmentos para salvar <br />
                o mundo.</p>
                <img className="w-140 h-120" src={imagemJogo} alt="imagem jogo" />
            </div>

            <div className="pt-40">
            <h1 className="text-7xl text-white font-questrial pb-5">Conheça nossos personagens</h1>
            </div>
        </div>
    )
}