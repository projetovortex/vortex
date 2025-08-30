import bateria from "../assets/bateria.png"

export function CardBateria() {
    return(
        <div className="lg:flex gap-20">
            <img className="lg:h-100 rounded-4xl" src={bateria} alt="" />
            <div className="flex flex-col pt-10">
                <h2 className="text-4xl text-purple-button font-questrial pb-5">Bateria li-ion 18650</h2>
                <p className="text-2xl">Tipo de bateria recarregável que utiliza compostos de lítio nos seus eletrodos.</p>
                <p className="text-3xl text-purple-button font-questrial lg:pt-20 pt-10">R$39,00</p>
            </div>
        </div>
    )
}