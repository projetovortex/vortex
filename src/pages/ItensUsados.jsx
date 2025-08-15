import { HeaderLogadoClaro } from "../components/HeaderLogadoClaro"
import quadrado from "../assets/quadrado.png"

export function ItensUsados() {
    return(
        <div>
            <HeaderLogadoClaro/>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-7xl text-white font-questrial pb-5">Itens Usados</h1>

                <div className="flex flex-line justify-center gap-5 items-center bg-white rounded-xl text-2xl text-purple-800">
                    <div className="flex flex-col w-15 h-10 gap-5">
                        <img src={quadrado} alt="" />
                        <img src={quadrado} alt="" />
                        <img src={quadrado} alt="" />
                        <img src={quadrado} alt="" />
                        <img src={quadrado} alt="" />
                        <img src={quadrado} alt="" />
                        <img src={quadrado} alt="" />
                        <img src={quadrado} alt="" />
                        <img src={quadrado} alt="" />
                    </div>
                    <div className="flex flex-line gap-80">
                        <div>
                            <p>Componente</p>
                            <p>Componente</p>
                            <p>Componente</p>
                            <p>Componente</p>
                            <p>Componente</p>
                            <p>Componente</p>
                            <p>Componente</p>
                            <p>Componente</p>
                            <p>Componente</p>
                        </div>
                        <div>
                            <p>R$0,00</p>
                            <p>R$0,00</p>
                            <p>R$0,00</p>
                            <p>R$0,00</p>
                            <p>R$0,00</p>
                            <p>R$0,00</p>
                            <p>R$0,00</p>
                            <p>R$0,00</p>
                            <p>R$0,00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}