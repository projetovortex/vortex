import imagemJogo from "../assets/imagemJogo.png"
import nymeria from "../assets/nymeria.png"
import abyss from "../assets/abyss.png"
import nefret from "../assets/nefret.png"
import han from "../assets/han.png"
import setaEsquerda from "../assets/setaEsquerda.png"
import setaDireita from "../assets/setaDireita.png"
import { HeaderLogadoClaro } from "../components/HeaderLogadoClaro"

import { CardNymeria } from "../components/CardNymeria"
import { CardAbyss } from "../components/CardAbyss"
import { CardNefret } from "../components/CardNefret"
import { CardHan } from "../components/CardHan"

export function Jogo() {
    return(
        <div className="bg-[url('./src/assets/bgJogo1.png')] bg-cover">
            <HeaderLogadoClaro/>
            <div className="flex flex-col items-center">
                <h1 className="text-7xl text-white font-questrial pb-10 text-shadow-sm text-shadow-cyan-shadow">Conheça nosso jogo</h1>

                <div className="flex gap-30 pb-15 font-questrial text-white">
                    <p className="text-3xl pt-30">Um mago causa fendas no <br />
                    tempo ao tentar criar energia <br />
                    eterna. Agora, heróis devem <br />
                    reunir fragmentos para salvar <br />
                    o mundo.</p>
                    <img className="w-130 h-120 pb-10" src={imagemJogo} alt="imagem jogo" />
                </div>

                <div className="pb-20 w-full flex flex-col items-center">
                    <h1 className="pt-20 pb-25 text-7xl text-white font-questrial pb-5 text-shadow-sm text-shadow-cyan-shadow">Conheça nossos personagens</h1>
                    
                    <div className="flex justify-center gap-10 font-questrial">
                        <div className="flex flex-col items-center">
                            <img className="p-2 bg-teal-200 rounded-3xl" src={nymeria} alt="nymeria" />
                            <p className="pt-3 text-white text-2xl">Nymeria</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img className="p-2 pb-10 bg-gray-400 rounded-3xl" src={abyss} alt="abyss" />
                            <p className="pt-3 text-white text-2xl">Abyss</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img className="p-2 pb-6 bg-orange-200 rounded-3xl" src={nefret} alt="nefret" />
                            <p className="pt-3 text-white text-2xl">Nefret</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img className="p-2 bg-red-400 rounded-3xl" src={han} alt="han" />
                            <p className="pt-3 text-white text-2xl">Han</p>
                        </div>
                    </div>

                    <div className="pt-20 w-full flex flex-col items-center">
                        <h1 className="pt-10 pb-10 text-7xl text-white font-questrial pb-5 text-shadow-sm text-shadow-cyan-shadow">Onde são as aventuras</h1>

                        <div className="flex justify-center items-center">
                            <img className="cursor-pointer h-50" src={setaEsquerda} alt="seta esquerda" />
                            <CardHan />
                            <img className="cursor-pointer h-50" src={setaDireita} alt="seta direita" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}