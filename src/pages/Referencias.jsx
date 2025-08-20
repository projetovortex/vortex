import { HeaderLogadoClaro } from "../components/HeaderLogadoClaro"

export function Referencias() {
    return(
        <div className="bg-[url('./src/assets/bgClaro.png')] h-screen w-screen">
            <HeaderLogadoClaro/>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-7xl text-very-dark-blue font-questrial pb-5">Referências</h1>

                <div className="flex gap-30 font-questrial text-white">
                        <p className="pt-30 text-3xl">Confira abaixo os artigos e <br />
                        materiais que serviram de <br />
                        inspiração e embasamento <br />
                        para o desenvolvimento <br />
                        deste TCC.</p>
                    
                    
                    <div className="flex flex-col text-purple-button text-xl gap-10 pt-10">
                        <button className="cursor-pointer bg-cyan-button px-25 py-5 rounded-xl">NOME DO ARTIGO</button>
                        <button className="cursor-pointer bg-cyan-button px-25 py-5 rounded-xl">NOME DO ARTIGO</button>
                        <button className="cursor-pointer bg-cyan-button px-25 py-5 rounded-xl">NOME DO ARTIGO</button>
                        <button className="cursor-pointer bg-cyan-button px-25 py-5 rounded-xl">NOME DO ARTIGO</button>
                    </div>
                </div>
            </div>
        </div>
    )
}