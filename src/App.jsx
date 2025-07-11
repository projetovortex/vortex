import { Home } from "./pages/Home"
import { Conheca } from "./pages/Conheca"
import { Aplicativo } from "./pages/Aplicativo"
import { Referencias } from "./pages/Referencias"
import { Jogo } from "./pages/Jogo"
import { HeaderLogadoClaro } from "./components/HeaderLogadoClaro"

export function App() {
  return(
    <div>
      <HeaderLogadoClaro />
      <Jogo />
    </div>
  )
}