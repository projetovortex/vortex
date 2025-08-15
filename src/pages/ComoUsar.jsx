import imagemProjeto from "../assets/imagemProjeto.jpeg"
import { HeaderLogadoClaro } from "../components/HeaderLogadoClaro"

export function ComoUsar() {
    return(
        <div>
            <HeaderLogadoClaro/>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-7xl text-indigo-950 font-questrial pb-5">Como usar o Vortex?</h1>
                <img src={imagemProjeto} alt="" />
            </div>
        </div>
    )
}