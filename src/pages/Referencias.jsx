import { HeaderLogadoClaro } from "../components/HeaderLogadoClaro"

export function Referencias() {
    return(
        <div>
            <HeaderLogadoClaro/>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-7xl text-indigo-950 font-questrial pb-5">Referências</h1>

                <div className="flex gap-30 font-questrial text-white">
                        <p className="pt-30 text-3xl">Projeto que converte energia do <br />
                        movimento em eletricidade para <br />
                        carregar pequenos dispositivos <br />
                        em situações emergenciais.</p>
                    
                    
                    <div className="flex flex-col text-purple-800 text-xl gap-10 pt-10">
                        <button className="cursor-pointer bg-teal-200 px-25 py-5 rounded-xl">NOME DO ARTIGO</button>
                        <button className="cursor-pointer bg-teal-200 px-25 py-5 rounded-xl">NOME DO ARTIGO</button>
                        <button className="cursor-pointer bg-teal-200 px-25 py-5 rounded-xl">NOME DO ARTIGO</button>
                        <button className="cursor-pointer bg-teal-200 px-25 py-5 rounded-xl">NOME DO ARTIGO</button>
                    </div>
                </div>
            </div>
        </div>
    )
}