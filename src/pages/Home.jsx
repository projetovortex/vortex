import ciclista from "../assets/ciclista.png"
import { HeaderLogadoClaro } from "../components/HeaderLogadoClaro"

export function Home() {
    return(
        <div>
            <HeaderLogadoClaro/>
            <div className="flex justify-center gap-20 font-questrial text-white">
                <div className="pt-30 pr-20">
                    <h1 className="text-9xl text-blue-300 pl-15">VORTEX</h1>
                    <h2 className="text-7xl">Gere energia a partir <br />de seu movimento</h2>
                </div>
                
                <img className="" src={ciclista} alt="ilustração ciclista" />
            </div>
        </div>
    )
}