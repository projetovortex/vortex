import { HeaderLogadoClaro } from "../components/HeaderLogadoClaro"

export function Referencias() {
    return(
        <div className="lg:bg-[url('/src/assets/bgClaro.png')] bg-cyan-mobile-conheca dark:bg-dark-purple-mobile-conheca lg:dark:bg-[url('/src/assets/bgEscuroConheca.png')] bg-cover min-h-screen">
            <HeaderLogadoClaro/>
            <div className="flex flex-col justify-center items-center p-5">
                <h1 className="lg:text-7xl text-6xl text-center lg:text-very-dark-blue text-purple-mobile-conheca font-questrial pb-5 text-shadow-sm text-shadow-cyan-shadow-como dark:text-light-blue">Referências</h1>

                <div className="lg:flex gap-30 font-questrial text-white lg:p-0 p-10">
                        <p className="lg:block hidden pt-30 text-3xl">Confira abaixo os artigos e <br />
                        materiais que serviram de <br />
                        inspiração e embasamento <br />
                        para o desenvolvimento <br />
                        deste TCC.</p>
                        <p className="lg:hidden block lg:text-white dark:text-cyan-button text-purple-button pt-10 text-2xl">Confira abaixo os artigos e 
                        materiais que serviram de 
                        inspiração e embasamento 
                        para o desenvolvimento 
                        deste TCC.</p>
                    
                    
                    <div className="flex flex-col text-purple-button text-2xl gap-10 lg:pt-10 pt-5 text-center">
                        <a href="https://drive.google.com/file/d/1ppSs5_S4tTNmkMXYQBJZp-F4W0L30Wqa/view?usp=sharing" className="shadow-lg cursor-pointer bg-cyan-button lg:px-25 lg:py-5 p-5 rounded-xl">Artigo 1</a>
                        <a href="https://drive.google.com/file/d/1NA_RGfFDtmQ79hLmy-62tpLtvy_arQGp/view?usp=sharing" className="shadow-lg cursor-pointer bg-cyan-button lg:px-25 lg:py-5 p-5 rounded-xl">Artigo 2</a>
                        <a href="https://drive.google.com/file/d/1qRg0KGx91pLhhW-NgcJC5BeLoPchqpi8/view?usp=sharing" className="shadow-lg cursor-pointer bg-cyan-button lg:px-25 lg:py-5 p-5 rounded-xl">Artigo 3</a>
                        <a href="https://drive.google.com/file/d/1HnKx-Lf40ca-s3O5n7s9YK2ZyScie7NA/view?usp=sharing" className="shadow-lg cursor-pointer bg-cyan-button lg:px-25 lg:py-5 p-5 rounded-xl">Artigo 4</a>
                    </div>
                </div>
            </div>
        </div>
    )
}