import imagemApp from "../assets/imagemApp.png"
import { HeaderLogadoClaro } from "../components/HeaderLogadoClaro"

export function Aplicativo(){
    return(
        <div className="bg-[url('./src/assets/bgClaro.png')] bg-cover h-screen w-screen">
            <HeaderLogadoClaro/>
            <div className="flex justify-center align-center gap-50">
                <div className="flex flex-col pt-10 font-questrial text-white">
                    <h1 className="text-8xl pb-10">Baixe o app</h1>
                    <p className="text-3xl pb-10">Com o app Vortex, você<br />
                    acompanha em tempo real a <br />
                    geração de energia do <br />
                    dispositivo e o carregamento da <br />
                    bateria.</p>
                    <div className="flex pl-40">
                        <button className="cursor-pointer bg-cyan-button w-50 py-5 rounded-xl text-purple-button text-xl">BAIXAR</button>
                    </div>
                </div>
                <img src={imagemApp} alt="imagem aplicativo" />
            </div>
        </div>
    )
}