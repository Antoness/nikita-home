import { Routes, Route} from "react-router-dom"

import NavbarComponen from "./components/NavbarComponen"

import HomePages from "./pages/HomePages"
import KelasPage from "./pages/KelasPage"
import SyaratKetenPage from "./pages/SyaratKetenPage"
import FooterComponen from "./components/FooterComponen"


function App() {
return <div>
    <NavbarComponen />
  <Routes>
    <Route path="/" Component={HomePages} />
    <Route path="/tutorial" Component={KelasPage} />
    <Route path="/why-nikita-generator" Component={SyaratKetenPage} />
  </Routes>
  <FooterComponen />
</div>
}

export default App
