import sensor from "../assets/sensor.png"

export function CardSensor() {
    return(
        <div className="lg:flex gap-20">
            <img className="lg:h-100 rounded-4xl" src={sensor} alt="" />
            <div className="flex flex-col pt-10">
                <h2 className="text-4xl text-purple-button font-questrial pb-5">Sensor INA219</h2>
                <p className="text-2xl">Mede corrente e tensão em circuitos de corrente contínua.</p>
                <p className="text-3xl text-purple-button font-questrial lg:pt-30 pt-10">R$50,00</p>
            </div>
        </div>
    )
}