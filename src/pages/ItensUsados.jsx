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
        <div className="bg-[url('./src/assets/bgJogo1.png')]">
            <HeaderLogadoClaro/>
            <div className="bg-white flex flex-col justify-center items-center">
                <h1 className="text-7xl text-purple-button font-questrial pb-5 pt-10">Itens Usados</h1>

                <div className="flex">
                    <button className="w-100 h-100">
                        <img src={setaEsquerda} alt="seta voltar" />
                    </button>
                    <CardDinamo/>
                    <button className="w-100 h-100">
                        <img src={setaDireita} alt="seta avançar" />
                    </button>
                </div>
            </div>
        </div>
    )
}