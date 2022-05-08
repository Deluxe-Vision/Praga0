import './NavBar.css'
import React from 'react'
import homeIcon from '../../img/Home.svg'


export const NavBar = () => {
  return (
    <div className='homeIcon'>
      <img id='icon' title='Home' src={homeIcon} />
      <img id='icon' title='Pragas' src={homeIcon} />
      <img id='icon' title='Mapa' src={homeIcon} />
    </div>
  )
}
