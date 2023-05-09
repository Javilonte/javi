import { useState, useEffect } from 'react'
import'./header.css'
import {GoMarkGithub} from 'react-icons/go'
function Header() {

  const [sprites, setSprites] = useState('');
  const [hover, setHover] = useState(false);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/charizard')
      .then(response => response.json())
      .then(data => {
        setSprites(data.sprites);
      })
      .catch(error => console.error(error));
  }, []);
  
  const frontSpriteUrl = sprites.front_default;
  const backSpriteUrl = sprites.back_default;

  return (
    <>
    <div className='container'>
    <nav className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="about">Sobre mi</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
    <div className="header-container">
    <div className="header-content">
        <h1 className='header-title'>Javier Fierro</h1>
        <div className='typear'>
        <span id='typing'>Desarrollador Web...  </span>
        <a href="https://github.com/Javilonte">
        <GoMarkGithub  />
        </a>
        </div>
       </div>
       <img src={hover ? backSpriteUrl : frontSpriteUrl}
                onMouseOver={()=> setHover(true)}
                onMouseOut={()=> setHover(false)} 
                alt="Charizard" className="header-img" />
    </div>
    </div>
    </>
  )
}
export default Header