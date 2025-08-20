import esp32 from "../assets/esp32.png"

export function CardEsp32() {
    return(
        <div className="flex gap-20">
            <img src={esp32} alt="" />
            <div className="flex flex-col pt-10">
                <h2 className="text-4xl text-purple-button font-questrial pb-5">Placa ESP32</h2>
                <p className="text-2xl">Microcontrolador de baixo custo e baixo consumo de energia, com conectividade Wi-Fi e Bluetooth integrada.</p>
                <p className="text-3xl text-purple-button font-questrial pt-40">R$45,00</p>
            </div>
        </div>
    )
}