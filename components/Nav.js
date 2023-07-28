import React from 'react'
import Link from 'next/link'


const Nav = () => {
  return (
    <nav className='navbar'>
        <div className='logo'>
        <h1>Edie</h1>
        </div>
        
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/works">Our Works</Link>
          </li>
          <li>
            <Link href="/client">Clients</Link>
          </li> 
          <li>
            <Link href="/contact">Contact</Link>
          </li>                     
                
        </ul>
      </nav> 
  )
}

export default Nav