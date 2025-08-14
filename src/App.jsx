import { Home } from "./pages/Home"
import { Conheca } from "./pages/Conheca"
import { Aplicativo } from "./pages/Aplicativo"
import { Referencias } from "./pages/Referencias"
import { Jogo } from "./pages/Jogo"
import { ComoUsar } from "./pages/ComoUsar"
import { SobreNos } from "./pages/SobreNos"
import { HeaderLogadoClaro } from "./components/HeaderLogadoClaro"
import { HeaderDeslogadoClaro } from "./components/HeaderDeslogadoClaro"
import { HeaderCadastro } from "./components/HeaderCadastro"
import { BrowserRouter, Route, Routes } from "react-router-dom"


export function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Conheca' element={<Conheca/>}/>
      </Routes>
    </BrowserRouter>
  )
}