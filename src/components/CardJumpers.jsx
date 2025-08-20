import jumpers from "../assets/jumpers.png"

export function CardJumpers() {
    return(
        <div className="flex gap-20">
            <img src={jumpers} alt="" />
            <div className="flex flex-col pt-10">
                <h2 className="text-4xl text-purple-button font-questrial pb-5">Jumpers</h2>
                <p className="text-2xl">Estabelecer conexões elétricas temporárias entre componentes em protoboards e placas.</p>
                <p className="text-3xl text-purple-button font-questrial pt-40">R$29,00</p>
            </div>
        </div>
    )
}