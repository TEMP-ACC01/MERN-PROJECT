import React from 'react'
import { NavLink } from 'react-router-dom'

const Errorpage = () => {
  return (
    <>
    <div id = 'not found'>
        <div classNome = 'not found'>
            <h1>404</h1>
        </div>
        <h2>PAGE NOT FOUND</h2>
        <p className='mb-5'> we are sorry</p>
        <NavLink to = "/" >back to HOME</NavLink>
    </div>
    </>
  )
}

export default Errorpage