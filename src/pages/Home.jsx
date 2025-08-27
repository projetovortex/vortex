import ciclista from "../assets/ciclista.png"
import { HeaderLogadoClaro } from "../components/HeaderLogadoClaro"

export function Home() {
    return(
        <div className="lg:bg-[url('./src/assets/bgClaro.png')] lg:dark:bg-[url('./src/assets/bgEscuro.png')] bg-cyan-mobile dark:bg-dark-purple bg-cover min-h-screen">
            <HeaderLogadoClaro/>
            <div className="min-h-screen lg:bg-none bg-cover bg-[url('./src/assets/ciclistaMobile.png')] flex justify-center itens-center pt-20 pb-10 gap-20 font-questrial text-white">
                <div className="lg:block flex flex-col justify-center items-center xl:pt-30 xl:pr-20">
                    <h1 className="lg:text-shadow-none text-shadow-sm text-shadow-cyan-shadow-como text-8xl lg:text-9xl text-white lg:text-light-blue xl:pl-15">VORTEX</h1>
                    <h2 className="lg:text-shadow-none text-shadow-sm text-shadow-cyan-shadow-como lg:text-7xl text-4xl">Gere energia a partir <br />de seu movimento</h2>
                </div>
                
                <img className="lg:block w-120 hidden" src={ciclista} alt="ilustração ciclista" />
            </div>
        </div>
    )
}