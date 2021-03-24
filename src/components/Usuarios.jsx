import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'



const Usuarios =() =>{
    const [usuarios, setUsuarios] = useState([])
const obtenerUsuarios = async()=>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    const users = await res.data
    setUsuarios(users)
}
useEffect( ()=>{
    obtenerUsuarios()
},[])

    return(
        <div>
            <h2>Lista de Usuarios</h2>
            {
                usuarios.map((item) =>(
                    <div>
                        <Link to={`/usuario/${item.id}`}> {item.name}</Link>
                    </div>
                ))
            }
        </div>
    )
}
export default Usuarios