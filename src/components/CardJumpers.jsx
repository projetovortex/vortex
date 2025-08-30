import jumpers from "../assets/jumpers.png"

export function CardJumpers() {
    return(
        <div className="lg:flex gap-20">
            <img className="lg:h-100 rounded-4xl" src={jumpers} alt="" />
            <div className="flex flex-col pt-10">
                <h2 className="text-4xl text-purple-button font-questrial pb-5">Jumpers</h2>
                <p className="text-2xl">Estabelecer conexões elétricas temporárias entre componentes em protoboards e placas.</p>
                <p className="text-3xl text-purple-button font-questrial lg:pt-20 pt-10">R$29,00</p>
            </div>
        </div>
    )
}