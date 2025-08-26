import ciclista from "../assets/ciclista.png"
import { HeaderLogadoClaro } from "../components/HeaderLogadoClaro"

export function Home() {
    return(
        <div className="bg-[url('./src/assets/bgClaro.png')] dark:bg-[url('./src/assets/bgEscuro.png')] bg-cover min-h-screen">
            <HeaderLogadoClaro/>
            <div className="flex justify-center itens-center pt-20 gap-20 font-questrial text-white">
                <div className="pt-30 pr-20">
                    <h1 className="text-9xl text-light-blue pl-15">VORTEX</h1>
                    <h2 className="text-7xl">Gere energia a partir <br />de seu movimento</h2>
                </div>
                
                <img className="" src={ciclista} alt="ilustração ciclista" />
            </div>
        </div>
    )
}