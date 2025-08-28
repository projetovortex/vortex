import fatima from "../assets/fatima.png"
import laube from "../assets/laube.png"
import monique from "../assets/monique.png"
import livia from "../assets/livia.png"
import { HeaderLogadoClaro } from "../components/HeaderLogadoClaro"

export function SobreNos() {
    return(
        <div>
            <div className="lg:bg-[url('./src/assets/bgSobreNos.png')] bg-cyan-mobile-conheca dark:bg-dark-purple-mobile-conheca lg:dark:bg-[url('./src/assets/bgSobreNosEscuro.png')] bg-cover">
                <HeaderLogadoClaro/>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="lg:text-7xl text-6xl text-center lg:text-white text-purple-mobile-conheca font-questrial lg:pt-0 pt-10 pb-10 text-shadow-sm text-shadow-cyan-shadow dark:text-light-blue lg:dark:text-white">Sobre nós</h1>

                    <div className="lg:flex hidden gap-20 pb-70 font-questrial text-white text-2xl">
                        <div className="flex flex-col justify-center items-center">
                            <img src={fatima} alt="fatima" />
                            <p>Fatima Albuquerque</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img src={laube} alt="laube" />
                            <p>Guilherme Laube</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img src={monique} alt="monique" />
                            <p>Kathelin Monique</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img src={livia} alt="livia" />
                            <p>Lívia Santana</p>
                        </div>
                    </div>

                    <div className="lg:hidden p-10 flex flex-col gap-10 pb-50 font-questrial text-center text-purple-button text-2xl">
                        <div className="flex gap-5">
                            <div className="flex flex-col justify-center items-center">
                                <img src={fatima} alt="fatima" />
                                <p>Fatima Albuquerque</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <img src={laube} alt="laube" />
                                <p>Guilherme Laube</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="flex flex-col justify-center items-center">
                                <img src={monique} alt="monique" />
                                <p>Kathelin Monique</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <img src={livia} alt="livia" />
                                <p>Lívia Santana</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:pt-30 flex flex-col justify-center items-center">
                    <h1 className="lg:text-7xl text-6xl text-center lg:text-white text-purple-mobile-conheca font-questrial pb-20 text-shadow-sm text-shadow-cyan-shadow lg:px-0 px-10">Ainda tem alguma dúvida?</h1>

                    <div className="lg:flex justify-center gap-30 text-white font-questrial lg:p-0 p-10">
                        <div className="lg:block flex flex-col items-center">
                            <h1 className="lg:text-white text-purple-button text-center text-4xl pb-10">Fique tranquilo e contate-nos</h1>
                            <p className="text-2xl lg:text-white text-purple-button font-questrial lg:pl-20 pb-20">A equipe Cat Vortex está aqui <br />para te ajudar! 
                                Basta escrever <br />para nós pelo card ao lado ou <br />mandar diretamente pelo nosso <br />email: 
                                <br />gatoarrupiada@gmail.com</p>
                        </div>

                        <div className="lg:flex hidden flex-col justify-center items-center bg-linear-to-t from-cyan-input to-gray-input rounded-xl dark:to-cyan-dark-sobrenos dark:from-dark-sobrenos shadow-xl px-10 pt-10 pb-3 mb-30">
                            <div className="flex flex-col justify-center items-center gap-2 mb-5" action="">
                                <textarea className="bg-white dark:bg-dark-purple pl-5 pt-1 rounded-2xl text-2xl text-light-purple dark:text-cyan-dark-sobrenos w-120 h-10" placeholder="Insira seu nome"></textarea>
                                <textarea className="bg-white dark:bg-dark-purple dark:text-cyan-dark-sobrenos pl-5 pt-1 rounded-2xl text-2xl text-light-purple w-120 h-10" placeholder="Insira seu email"></textarea>
                                <textarea className="bg-white dark:bg-dark-purple dark:text-cyan-dark-sobrenos pl-5 pt-1 rounded-2xl text-2xl text-light-purple w-120 h-30" placeholder="Fale conosco (até 500 caracteres)"></textarea>
                            </div>
                            <button className="shadow-md cursor-pointer bg-purple-button2 dark:bg-light-blue dark:text-dark-sobrenos text-cyan-button px-15 py-3 rounded-xl">ENVIAR</button>
                        </div>

                        <div className="lg:hidden flex flex-col justify-center items-center bg-linear-to-t from-cyan-input to-gray-input lg:rounded-xl rounded-4xl dark:to-cyan-dark-sobrenos dark:from-dark-sobrenos shadow-xl px-3 pt-10 pb-3 mb-30">
                            <div className="flex flex-col justify-center items-center gap-2 mb-5" action="">
                                <textarea className="bg-white dark:bg-dark-purple pl-5 pt-1 rounded-2xl text-2xl text-light-purple dark:text-cyan-dark-sobrenos w-80 h-10" placeholder="Insira seu nome"></textarea>
                                <textarea className="bg-white dark:bg-dark-purple dark:text-cyan-dark-sobrenos pl-5 pt-1 rounded-2xl text-2xl text-light-purple w-80 h-10" placeholder="Insira seu email"></textarea>
                                <textarea className="bg-white dark:bg-dark-purple dark:text-cyan-dark-sobrenos pl-5 pt-1 rounded-2xl text-2xl text-light-purple w-80 h-30" placeholder="Fale conosco (até 500 caracteres)"></textarea>
                            </div>
                            <button className="shadow-md cursor-pointer bg-purple-button2 dark:bg-light-blue dark:text-dark-sobrenos text-cyan-button px-15 py-3 rounded-xl">ENVIAR</button>
                        </div>
                </div>
            </div>
            </div>
        </div>
    )
}