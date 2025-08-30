import stepup from "../assets/stepup.png"

export function CardStepUp() {
    return(
        <div className="lg:flex gap-20">
            <img className="lg:h-100 rounded-4xl" src={stepup} alt="" />
            <div className="flex flex-col pt-10">
                <h2 className="text-4xl text-purple-button font-questrial pb-5">Step-Up</h2>
                <p className="text-2xl">Aumenta a tensão de entrada para uma tensão de saída maior.</p>
                <p className="text-3xl text-purple-button font-questrial lg:pt-40 pt-10">R$19,00</p>
            </div>
        </div>
    )
}