import iconVortex from "../assets/iconVortex.png"

export function HeaderCadastro() {
    return(
        <div>
            <header className="px-10 py-5 pb-30 flex justify-between align-middle h-25 font-hanken font-bold text-white text-2xl">

                <div className="flex align-center justify-center gap-3">
                    <button className="cursor-pointer w-fit"><img className="w-20 h-20" src={iconVortex} alt="icone vortex"/></button>
                    <button className="cursor-pointer pt-6">VORTEX</button>
                </div>
            </header>
        </div>
    )
}