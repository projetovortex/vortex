import modulo from "../assets/modulo.png"

export function CardModulo() {
    return(
        <div className="lg:flex gap-20">
            <img className="lg:h-100 rounded-4xl" src={modulo} alt="" />
            <div className="flex flex-col pt-10">
                <h2 className="text-4xl text-purple-button font-questrial pb-5">Módulo TP4056</h2>
                <p className="text-2xl">Utilizado para carregar baterias de íon-lítio (Li-ion).</p>
                <p className="text-3xl text-purple-button font-questrial lg:pt-30 pt-10">R$11,00</p>
            </div>
        </div>
    )
}