import imagemProjeto from "../assets/imagemProjeto.jpeg"
import { HeaderLogadoClaro } from "../components/HeaderLogadoClaro"
import { Link } from "react-router-dom"

export function Conheca() {
    return(
        <div>
            <HeaderLogadoClaro/>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-7xl text-indigo-950 font-questrial pb-5">Conheça o Vortex</h1>

                <div className="flex gap-30 font-questrial text-white">
                    <div>
                        <p className="text-3xl pb-10">Projeto que converte energia do <br />
                        movimento em eletricidade para <br />
                        carregar pequenos dispositivos <br />
                        em situações emergenciais.</p>
                        <img className="w-100 h-60 br-10 rounded-xl" src={imagemProjeto} alt="imagem do projeto" />
                    </div>
                    
                    <div className="flex flex-col text-purple-800 text-xl gap-10 pt-20">
                        <Link to={"/ItensUsados"} className="cursor-pointer bg-teal-200 px-15 py-5 rounded-xl">Veja os itens</Link>
                        <Link to={"/ComoUsar"} button className="cursor-pointer bg-teal-200 px-15 py-5 rounded-xl">Como usar</Link>
                        <Link to={"/Referencias"} button className="cursor-pointer bg-teal-200 px-15 py-5 rounded-xl">Referências</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}