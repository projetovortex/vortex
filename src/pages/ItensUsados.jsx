import { HeaderLogadoClaro } from "../components/HeaderLogadoClaro"
import quadrado from "../assets/quadrado.png"
import { CardEsp32 } from "../components/CardEsp32"
import { CardBuckBoost } from "../components/CardBuckBoost"
import { CardCapacitor } from "../components/CardCapacitor"
import { CardJumpers } from "../components/CardJumpers"
import { CardBateria } from "../components/CardBateria"
import { CardSensor } from "../components/CardSensor"
import { CardModulo } from "../components/CardModulo"
import { CardStepUp } from "../components/CardStepUp"
import { CardDinamo } from "../components/CardDinamo"
import setaEsquerda from "../assets/setaEsquerda.png"
import setaDireita from "../assets/setaDireita.png"

export function ItensUsados() {
    return(
        <div className="bg-[url('./src/assets/bgJogo1.png')] dark:bg-[url('./src/assets/bgJogoEscuro.png')] bg-cover">
            <HeaderLogadoClaro/>
            <div className="h-screen bg-white dark:bg-gray-200 flex flex-col justify-center items-center">
                <h1 className="lg:text-7xl text-5xl text-center text-purple-button font-questrial pb-5 lg:pt-10 text-shadow-sm text-shadow-cyan-shadow-white">Itens Usados</h1>

                <div className="flex">
                    <button className="cursor-pointer w-100 h-100">
                        <img src={setaEsquerda} alt="seta voltar" />
                    </button>
                    <CardStepUp/>
                    <button className="cursor-pointer w-100 h-100">
                        <img src={setaDireita} alt="seta avançar" />
                    </button>
                </div>
            </div>
        </div>
    )
}