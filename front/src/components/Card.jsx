import '../styles/card.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../redux/actions';

const Card = ({ id, name, image, onClose, gender }) => {
      const dispatch = useDispatch();
      const myFavorites = useSelector((state) => state.allCharacters);
      const [girar, setGirar] = useState(false)
      const [isFav, setIsFav] = useState(false);

      const handleFavorite = (isFav) => {
            isFav ? dispatch(removeFav(id)) : dispatch(addFav({ id, name, image, gender }))
            setIsFav(!isFav)
      }

      useEffect(() => {
            myFavorites.forEach((fav) => {
                  if (fav.id === id) {
                        setIsFav(true);
                  }
            });
      }, [myFavorites]);

      return (
            <div className='container'>
                  <div className={`animacion ${girar ? 'girar' : 'cardContainer'}`} onClick={() => setGirar(!girar)}>
                        <div className='imgContainer'>
                              <img src={image} alt='' className='img' />
                        </div>
                        <div className='backCard'>
                              <div className='botonContainer'>
                                    <button onClick={() => handleFavorite(isFav)} className='btn-fav'>
                                          {isFav ? '❤️' : '🤍'}
                                    </button>
                                    {location.pathname !== '/favorites' && <button onClick={() => onClose(id)} className='btn' >X</button>}
                              </div>
                              <div className='infoContainer'>
                                    <div className='dataContainer'>
                                          <h2>ID : {id}</h2>
                                          <h2>Name: {name} </h2>
                                    </div>
                                    <div className='linkContainer'>
                                          <Link to={`/detail/${id}`} className='link'>
                                                More Info
                                          </Link>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Card;