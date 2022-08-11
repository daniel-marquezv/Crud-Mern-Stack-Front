import React, { useEffect, useState } from 'react'
import { useParams , useNavigate} from "react-router";
import axios from 'axios'
import Swal from 'sweetalert2'

export const EditarUsuario = () => {

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')

  const navegar = useNavigate()
  const params = useParams()


  useEffect(() => {
    axios.post('/api/usuario/obtenerdatausuario', {idusuario: params.idusuario})
    .then(res => {
      console.log(res.data)
      const datausuario = res.data[0] 
      setNombre(datausuario.nombre)
      setEmail(datausuario.email)
      setTelefono(datausuario.telefono)
    })
  }, [])

  //Funcion qeu actualiza un usuario
  const editarUsuario=()=>{
    //Nuevo objeto para actualizar un usuario
    const actualizarUsuario = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      idusuario: params.idusuario
    }

    //Hacer peticion usando axios
    axios.put('/api/usuario/actualizausuario',actualizarUsuario)
    .then(res =>{
      // alert(res.data)
      Swal.fire('Correcto', 'Usuario editado correctamente')
      navegar('/')
    })
    .then(err =>{ console.log(err)})
  }
  

  return (
    <div className='container'>
      <div className='row'>
        <h2>Editar usuario</h2>
      </div>

      <div className='row'>
        <div className='col-sm-6 offset-3'>
          <div className='mb-3'>
            <label htmlFor='nombre' className='form-label'>Nombre</label>
            <input type='text' className='form-control' value={nombre} onChange={(e) => { setNombre(e.target.value) }} />
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type='text' className='form-control' value={email} onChange={(e) => { setEmail(e.target.value) }} />
          </div>
          <div className='mb-3'>
            <label htmlFor='telefono' className='form-label'>Telefono</label>
            <input type='text' className='form-control' value={telefono} onChange={(e) => { setTelefono(e.target.value) }} />
          </div>

          <button onClick={editarUsuario} type='submit' className='btn btn-primary'>Editar</button>
        </div>
      </div>
    </div>
  )
}
