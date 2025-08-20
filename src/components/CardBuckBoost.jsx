import buckboost from "../assets/buckboost.png"

export function CardBuckBoost() {
    return(
        <div className="flex gap-20">
            <img src={buckboost} alt="" />
            <div className="flex flex-col pt-10">
                <h2 className="text-4xl text-purple-button font-questrial pb-5">Buck Boost</h2>
                <p className="text-2xl">Conversor Dc Dc Buck boost 2 em Step up e Down Xl6019.</p>
                <p className="text-3xl text-purple-button font-questrial pt-40">R$26,00</p>
            </div>
        </div>
    )
}