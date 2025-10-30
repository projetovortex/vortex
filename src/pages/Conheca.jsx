import imagemProjeto from "../assets/imagemProjeto.jpeg"
import { HeaderLogadoClaro } from "../components/HeaderLogadoClaro"
import { Link } from "react-router-dom"

export function Conheca() {
    return(
        <div className="lg:bg-[url('/src/assets/bgClaro.png')] bg-cyan-mobile-conheca dark:bg-dark-purple-mobile-conheca lg:dark:bg-[url('/src/assets/bgEscuroConheca.png')] bg-cover min-h-screen">
            <HeaderLogadoClaro/>
            <div className="flex flex-col justify-center items-center">
                <h1 className="lg:text-7xl text-6xl text-center lg:text-very-dark-blue text-purple-mobile-conheca font-questrial lg:pt-0 pt-10 lg:pb-5 text-shadow-sm text-shadow-cyan-shadow dark:text-light-blue">Conheça o Vortex</h1>

                <div className="lg:flex items-center gap-30 p-10 font-questrial text-white">
                    <div>
                        <p className="lg:block hidden lg:text-white text-purple-button lg:text-3xl text-2xl pb-10">Projeto que converte energia do <br />
                        movimento em eletricidade para <br />
                        carregar pequenos dispositivos <br />
                        em situações emergenciais.</p>

                        <p className="lg:hidden block dark:text-cyan-input text-purple-button lg:text-3xl text-2xl pb-10">Projeto que converte energia do
                        movimento em eletricidade para
                        carregar pequenos dispositivos
                        em situações emergenciais.</p>
                    </div>
                    
                    <div className="flex flex-col text-purple-button lg:text-xl text-3xl gap-10 lg:pt-20">
                        <Link to={"/ItensUsados"} className="cursor-pointer text-center bg-cyan-button px-15 py-5 rounded-xl shadow-lg">Veja os itens</Link>
                        <Link to={"/ComoUsar"} button className="cursor-pointer text-center bg-cyan-button px-15 py-5 rounded-xl shadow-lg">Como usar</Link>
                        <Link to={"/Referencias"} button className="cursor-pointer text-center bg-cyan-button px-15 py-5 rounded-xl shadow-lg">Referências</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}