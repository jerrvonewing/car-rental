import './App.css'
import Header from './components/Header'
import Deals from './components/Deals'
import Reservations from './components/Reservations'
import Fleet from './components/Fleet'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Deals></Deals>
      <Reservations></Reservations>
      <Fleet></Fleet>
      <Footer></Footer>
    </div>
  )
}

export default App
