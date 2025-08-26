import imagemProjeto from "../assets/imagemProjeto.jpeg"
import { HeaderLogadoClaro } from "../components/HeaderLogadoClaro"

export function ComoUsar() {
    return(
        <div className="bg-[url('./src/assets/bgComoUsar.png')] dark:bg-[url('./src/assets/bgComoUsarDark.png')] bg-cover min-h-screen">
            <HeaderLogadoClaro/>
            <div className="flex flex-col justify-center items-center pb-10 ">
                <h1 className="text-7xl text-very-dark-blue font-questrial pb-5 text-shadow-sm text-shadow-cyan-shadow-como dark:text-light-blue">Como usar o Vortex?</h1>
                <img src={imagemProjeto} alt="" />
            </div>
        </div>
    )
}