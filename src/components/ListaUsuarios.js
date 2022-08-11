import React, { useEffect, useState } from 'react'
import { UsuarioIndividual } from './UsuarioIndividual'
import axios from "axios";

export const ListaUsuarios = () => {

  const [dataUsuarios, setDataUsuarios] = useState([])

  useEffect(() => {
    axios.get('api/usuario/obtenerusuarios')
      .then(res => {
        console.log(res.data)
        setDataUsuarios(res.data)
      }).catch(err => {
        console.log(err)
      })


  }, [])

  //Mapear lista de usuarios en objeto usuario

  const listaUsuarios = dataUsuarios.map(usuario => {
     return(
      <div>
          <UsuarioIndividual key={usuario.idusuario} usuario={usuario} />
      </div>
     )
  })

  return (
    <div>
      <h2>ListaUsuarios</h2>
      {listaUsuarios}
    </div>
  )
}
