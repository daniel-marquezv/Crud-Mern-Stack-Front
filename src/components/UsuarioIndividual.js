import React, { useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Swal from 'sweetalert2'

export const UsuarioIndividual = ({ usuario }) => {

  const navegar = useNavigate()

  //Animacion de scroll al bajar
  useEffect(() => {
    AOS.init()
  }, [])
  

  //Funcion para eliminar un usuario
const borrarUsuario = (idusuario) =>{
  axios.post('/api/usuario/borrarusuario', {idusuario: idusuario})
    .then(res => {
      console.log(res.data)
      // alert(res.data)
      Swal.fire('Correcto', 'Usuario eliminado correctamente')
      navegar(0)
    }).catch(err =>{
      console.log(err)
    })
}

  return (
    <div className='container'>
      <div className='row'>

        <div className='col-sm-6 offset-3' data-aos='flip-right'>
          <ul className='list-group'>
            <li className='list-group-item'>{usuario.idusuario} </li>
            <li className='list-group-item'>{usuario.nombre} </li>
            <li className='list-group-item'>{usuario.email} </li>
            <li className='list-group-item'>{usuario.telefono} </li>
          </ul>

          <Link to={`/editarusuario/${usuario.idusuario}`}><li className='btn btn-success '>Editar</li></Link>
          &nbsp;
          <button className='btn btn-danger' onClick={() => {borrarUsuario(usuario.idusuario)}}>Eliminar</button>
          <hr className='mt-4' />
        </div>


      </div>
    </div>
  )
}
