import dinamo from "../assets/dinamo.png"

export function CardDinamo() {
    return(
        <div className="lg:flex gap-20">
            <img className="lg:h-100 rounded-4xl" src={dinamo} alt="" />
            <div className="flex flex-col pt-10">
                <h2 className="text-4xl text-purple-button font-questrial pb-5 ">Dínamo</h2>
                <p className="text-2xl">Transforma energia mecânica em energia elétrica, gerando corrente contínua.</p>
                <p className="text-3xl text-purple-button font-questrial lg:pt-30 pt-10">R$110,00</p>
            </div>
        </div>
    )
}