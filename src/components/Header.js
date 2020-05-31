import React from 'react'
import trollface from './trollface.png'

export default function Header() {
    return (
       <header className="header">
           <img src={trollface} alt="trollface"></img>
           <p>Meme generator</p>
       </header>
    )
}
