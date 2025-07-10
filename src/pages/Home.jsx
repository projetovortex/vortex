import ciclista from "../assets/ciclista.png"

export function Home() {
    return(
        <div className="flex justify-center font-questrial text-white">
            <div className="pt-30">
                <h1 className="text-8xl text-blue-300">VORTEX</h1>
                <h2 className="text-6xl">Gere energia a partir <br />de seu movimento</h2>
            </div>
            
            <img className="" src={ciclista} alt="ilustração ciclista" />
        </div>
    )
}