import esp32 from "../assets/esp32.png"

export function CardEsp32() {
    return(
        <div className="lg:flex gap-20">
            <img className="lg:h-100 rounded-4xl" src={esp32} alt="" />
            <div className="flex flex-col pt-10">
                <h2 className="text-4xl text-purple-button font-questrial pb-5">Placa ESP32</h2>
                <p className="text-2xl">Microcontrolador de baixo custo e baixo consumo de energia, com conectividade Wi-Fi e Bluetooth integrada.</p>
                <p className="text-3xl text-purple-button font-questrial lg:pt-20 pt-10">R$45,00</p>
            </div>
        </div>
    )
}