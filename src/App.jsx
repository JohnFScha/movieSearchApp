import './App.css';
import Login from './Components/Login/Login';
import Listado from './Components/Listado/Listado'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/listado" element={<Listado />}/> 
    </Routes>
    <Footer />
    </>
  );
}

export default App;
