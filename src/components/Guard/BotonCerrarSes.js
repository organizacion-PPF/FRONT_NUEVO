import React from 'react'


export const BotonCerrarSes = () => {

    

  //Usamos RemoveItem para eliminar el token del localStorage
  const logaut = () => {
	window.localStorage.removeItem('LoginPage')
    window.location.href="/home-page"
	}

    return (
        <li class="nav-item active mx-2">
          <button class ="btn btn-warning"  onClick = {logaut}><i class='bx bxs-log-out'></i>
            CERRAR 
          </button>
        </li>
      )
}