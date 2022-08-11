import React, { useState } from 'react'
import uniquid from "uniqid";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


export const AgregarUsuario = () => {

  const navegar = useNavigate()
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')

  const adUsuario = () => {
    const usuario ={
      nombre: nombre,
      email: email,
      telefono: telefono,
      idusuario: uniquid()
    }

    console.log(usuario)

    axios.post('./api/usuario/agregarusuario', usuario)
    .then(res =>{
      // alert(res.data)
      Swal.fire('Correcto', 'Usuario creado correctamente')
      navegar('/')
    })
    .then(err => {console.log(err)})
  }

  return (
    <div className='container'>
      <div className='row'>
        <h2>Crear un nuevo usuario</h2>
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

          <button onClick={adUsuario} type='submit' className='btn btn-primary'>Guardar</button>
        </div>
      </div>
    </div>
  )
}
