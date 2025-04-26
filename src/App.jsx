
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Accueil from './components/accueil/accueil'
import Apropos from './components/main/apropos'
import Services from './components/main/services'
import Projects from './components/main/projects'
import AvisClients from './components/main/avis-clients'
function App() {
  return (
    <>
    <Header></Header>
    <Accueil></Accueil>
    <Apropos></Apropos>
    <Services></Services>
    <Projects></Projects>
    <AvisClients></AvisClients>
    <Footer></Footer>
    </>
  )
}

export default App

