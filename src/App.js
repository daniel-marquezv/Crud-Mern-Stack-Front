import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AgregarUsuario, EditarUsuario, ListaUsuarios } from './components/index';
import { Navbar } from './ui/Navbar';

function App() {
  return (
    <div className='App'>

     <Navbar/>

      <Routes>
        <Route path='/' element={<ListaUsuarios />} />
        <Route path='/agregarusuario' element={<AgregarUsuario />} />
        <Route path='/editarusuario/:idusuario' element={<EditarUsuario />} />

      </Routes>
    </div>
  );
}

export default App;
