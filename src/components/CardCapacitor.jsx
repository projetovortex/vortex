import capacitor from "../assets/capacitor.png"

export function CardCapacitor() {
    return(
        <div className="flex gap-20">
            <img className="rounded-4xl" src={capacitor} alt="" />
            <div className="flex flex-col pt-10">
                <h2 className="text-4xl text-purple-button font-questrial pb-5">Capacitor eletrolítico</h2>
                <p className="text-2xl">Componente eletrônico que armazena energia elétrica em um campo elétrico.</p>
                <p className="text-3xl text-purple-button font-questrial pt-40">R$17,00</p>
            </div>
        </div>
    )
}