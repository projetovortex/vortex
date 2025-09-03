import imagemApp from "../assets/imagemApp.png"
import { HeaderLogadoClaro } from "../components/HeaderLogadoClaro"

export function Aplicativo(){
    return(
        <div className="lg:bg-[url('/src/assets/bgClaro.png')] bg-cyan-mobile-conheca dark:bg-dark-purple-mobile-conheca lg:dark:bg-[url('/src/assets/bgEscuro.png')] bg-cover h-screen w-screen">
            <HeaderLogadoClaro/>
            <div className="flex lg:flex-row flex-col justify-center lg:items-start items-center lg:gap-50">
                <div className="flex flex-col lg:justify-normal justify-center lg:items-start items-center pt-10 font-questrial text-white">
                    <h1 className="lg:text-8xl text-5xl text-center lg:text-white text-purple-mobile-conheca lg:dark:text-white dark:text-light-blue lg:pb-10 pb-5 text-shadow-sm text-shadow-cyan-shadow-como">Baixe o app</h1>
                    <p className="lg:text-white text-purple-mobile-conheca dark:text-cyan-button text-2xl lg:p-0 p-10">Com o app Vortex, você<br />
                    acompanha em tempo real a <br />
                    geração de energia do <br />
                    dispositivo e o carregamento da <br />
                    bateria.</p>
                    <div className="lg:flex hidden pl-40 pt-10">
                        <button className="shadow-lg cursor-pointer bg-cyan-button w-50 py-5 rounded-xl text-purple-button text-xl">BAIXAR</button>
                    </div>
                </div>
                <img className="lg:cursor-default cursor pointer lg:w-fit w-50" src={imagemApp} alt="imagem aplicativo" />
            </div>
        </div>
    )
}