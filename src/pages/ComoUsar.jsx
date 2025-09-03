import imagemProjeto from "../assets/imagemProjeto.jpeg"
import { HeaderLogadoClaro } from "../components/HeaderLogadoClaro"

export function ComoUsar() {
    return(
        <div className="lg:bg-[url('/src/assets/bgComoUsar.png')] bg-cyan-mobile-conheca dark:bg-dark-purple-mobile-conheca lg:dark:bg-[url('/src/assets/bgComoUsarDark.png')] bg-cover min-h-screen">
            <HeaderLogadoClaro/>
            <div className="flex flex-col justify-center items-center lg:pb-10 lg:p-10 font-questrial">
                <h1 className="lg:text-7xl text-5xl text-center lg:text-very-dark-blue text-purple-mobile-conheca pb-5 text-shadow-sm text-shadow-cyan-shadow-como dark:text-light-blue">Como usar o Vortex?</h1>
                <img className="lg:p-0 p-10" src={imagemProjeto} alt="" />
                <p className="lg:hidden block px-10 lg:text-white dark:text-cyan-button text-purple-mobile-conheca text-2xl pb-10">Projeto que converte energia do
                        movimento em eletricidade para
                        carregar pequenos dispositivos
                        em situações emergenciais.</p>
            </div>
        </div>
    )
}