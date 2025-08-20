import dinamo from "../assets/dinamo.png"

export function CardDinamo() {
    return(
        <div className="flex gap-20">
            <img src={dinamo} alt="" />
            <div className="flex flex-col pt-10">
                <h2 className="text-4xl text-purple-button font-questrial pb-5">Dínamo</h2>
                <p className="text-2xl">Transforma energia mecânica em energia elétrica, gerando corrente contínua.</p>
                <p className="text-3xl text-purple-button font-questrial pt-40">R$110,00</p>
            </div>
        </div>
    )
}