import stepup from "../assets/stepup.png"

export function CardStepUp() {
    return(
        <div className="flex gap-20">
            <img src={stepup} alt="" />
            <div className="flex flex-col pt-10">
                <h2 className="text-4xl text-purple-button font-questrial pb-5">Step-Up</h2>
                <p className="text-2xl">Aumenta a tensão de entrada para uma tensão de saída maior.</p>
                <p className="text-3xl text-purple-button font-questrial pt-40">R$19,00</p>
            </div>
        </div>
    )
}