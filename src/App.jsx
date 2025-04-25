
import './App.css'
import Main from './components/main/main'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Accueil from './components/accueil/accueil'
import Apropos from './components/main/apropos'
import Services from './components/main/services'

function App() {
  return (
    <>
    <Header></Header>
    <Accueil></Accueil>
    <Apropos></Apropos>
    <Services></Services>
    <Main></Main>
    <Footer></Footer>
    </>
  )
}

export default App

