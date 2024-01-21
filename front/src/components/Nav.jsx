import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import '../styles/nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faRectangleXmark, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ onSearch, deleteAll }) => {

   const handleRandomClick = () => {
      const randomId = Math.floor(Math.random() * 826) + 1;
      onSearch(randomId);
   };

   const [theme, setTheme] = useState(false);

   const handleTheme = () => {
      setTheme(!theme);
   }

   const [cerrar, setCerrar] = useState('');

   const handleCerrar = () => {
      setCerrar(false);
   }

   const handleBoton = () => {
      if (!cerrar) {
         setCerrar(true);
      } else {
         setCerrar(false);
      }
   }

   return (
      <div className='box-nav'>
         <div className={`buttonContainer ${cerrar ? 'active' : ''}`}  >
            <div className='boxBotonCerrar'>
               <button className='cerrarNav' onClick={handleCerrar}>
                  <FontAwesomeIcon icon={faRectangleXmark} className='botonCerrarNav' />
               </button>
            </div>

            <div className='boxTheme'>
               <button className='switch'>
                  <span>
                     <i>
                        <FontAwesomeIcon icon={faSun} className='iconTheme' />
                     </i>
                  </span>
                  <span>
                     <i>
                        <FontAwesomeIcon icon={faMoon} className='iconTheme' />
                     </i>
                  </span>
               </button>
            </div>

            <div className='buttonContainerActive'>
               <Link to='/home'>
                  <button className="button">
                     Home
                  </button>
               </Link>
               <Link to='/favorites'>
                  <button className="button">
                     Favorites
                  </button>
               </Link>
               <Link to='/about'>
                  <button className="button">
                     About
                  </button>
               </Link>
               <Link to={'/'}>
                  <button className='button'>
                     Log out
                  </button>
               </Link>
            </div>
         </div>
         <nav className='button-container__searchBar'>
            <SearchBar onSearch={onSearch} handleRandomClick={handleRandomClick} deleteAll={deleteAll} />
         </nav>
         <div className='boxIcon'>
            <button className='iconBox' onClick={handleBoton}>
               <FontAwesomeIcon icon={faBars} className='icon' />
            </button>
         </div>
      </div >
   );
};

export default Nav;
