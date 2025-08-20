import fatima from "../assets/fatima.png"
import laube from "../assets/laube.png"
import monique from "../assets/monique.png"
import livia from "../assets/livia.png"
import { HeaderLogadoClaro } from "../components/HeaderLogadoClaro"

export function SobreNos() {
    return(
        <div>
            <div className="bg-[url('./src/assets/bgSobreNos.png')] bg-cover">
                <HeaderLogadoClaro/>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-7xl text-white font-questrial pb-7">Sobre nós</h1>

                    <div className="flex gap-20 pb-70 font-questrial text-white text-2xl">
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
                </div>

                <div className="pt-30 flex flex-col justify-center items-center">
                <h1 className="text-7xl text-white font-questrial pb-20">Ainda tem alguma dúvida?</h1>

                <div className="flex justify-center gap-30 text-white font-questrial">
                    <div>
                        <h1 className="text-4xl pb-10">Fique tranquilo e contate-nos</h1>
                        <p className="text-2xl text-white font-questrial pl-20 pb-20">A equipe Cat Vortex está aqui <br />para te ajudar! 
                            Basta escrever <br />para nós pelo card ao lado ou <br />mandar diretamente pelo nosso <br />email: 
                            <br />gatoarrupiada@gmail.com</p>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-linear-to-t from-cyan-input to-gray-input rounded-xl px-10 pt-10 pb-3 mb-30">
                        <div className="flex flex-col justify-center items-center gap-2 mb-5" action="">
                            <textarea className="bg-white pl-5 rounded-2xl text-2xl text-light-purple w-120 h-10" placeholder="Insira seu nome"></textarea>
                            <textarea className="bg-white pl-5 rounded-2xl text-2xl text-light-purple w-120 h-10" placeholder="Insira seu email"></textarea>
                            <textarea className="bg-white pl-5 rounded-2xl text-2xl text-light-purple w-120 h-30" placeholder="Fale conosco (até 500 caracteres)"></textarea>
                        </div>
                        <button className="cursor-pointer bg-purple-button2 text-cyan-button px-15 py-3 rounded-xl">ENVIAR</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}