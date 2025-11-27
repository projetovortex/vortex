import imagemProjeto from "../assets/imagemProjeto.jpeg"
import { HeaderLogadoClaro } from "../components/HeaderLogadoClaro"

export function ComoUsar() {
    return(
        <div className="lg:bg-[url('/src/assets/bgComoUsar.png')] bg-cyan-mobile-conheca dark:bg-dark-purple-mobile-conheca lg:dark:bg-[url('/src/assets/bgComoUsarDark.png')] bg-cover min-h-screen">
            <HeaderLogadoClaro/>
            <div className="flex flex-col justify-center items-center lg:pb-10 lg:p-10 font-questrial">
                <h1 className="lg:text-7xl text-5xl text-center lg:text-very-dark-blue text-purple-mobile-conheca pb-5 text-shadow-sm text-shadow-cyan-shadow-como dark:text-light-blue">Como usar o Vortex?</h1>
                <div className="flex items-center lg:gap-20 lg:pt-20 ">
                    <p className="lg:block hidden w-140 text-center text-white text-4xl">Para utilizar nosso projeto, basta pedalar a bicicleta que o Vortex já gera a energia para o carregamento de seu dispositivo.
                    A entrada USB para o carregamento está na caixa embaixo do banco.</p>
                
                </div>
                <p className="lg:hidden block px-10 lg:text-white dark:text-cyan-button text-purple-mobile-conheca text-2xl pb-10">Para utilizar nosso projeto, basta pedalar a bicicleta que o Vortex já gera a energia para o carregamento de seu dispositivo.
                A entrada USB para o carregamento está na caixa embaixo do banco.</p>
            </div>
        </div>
    )
}