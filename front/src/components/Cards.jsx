import Card from './Card';
import '../styles/cards.css'



const Cards = ({ characters, onClose }) => {
   return (
      <div className='box-flip'>
         {
            characters.map((char) => {
               return <Card
                  image={char.image}
                  id={char.id}
                  key={char.id}
                  name={char.name}
                  status={char.status}
                  species={char.species}
                  gender={char.gender}
                  origin={char.origin.name}
                  onClose={onClose}
               />
            })
         }
      </div>
   );
}

export default Cards;
