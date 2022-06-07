import './NavBar.css'
import React from 'react'
import homeIcon from '../../img/Home.svg'


export const NavBar = () => {
  return (
    <div className='homeIcon'>
      <img onClick={() => window.location.href = "/"} id='icon' title='Home' src={homeIcon} />
      <img onClick={() => window.location.href = "/princPragas"} id='icon' title='Pragas' src={homeIcon} />
    </div>
  )
}
