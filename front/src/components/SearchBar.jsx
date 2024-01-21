import { useState } from "react";
import '../styles/searchBar.css'


const SearchBar = ({ onSearch, handleRandomClick, deleteAll }) => {

   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }

   const handleSearch = () => {
      onSearch(id);
      setId('')
   };

   const handleDeleteAll = () => {
      deleteAll();
   }

   return (
      <div className="AgregarDiv">
         <input type='search' value={id} onChange={handleChange} placeholder="Enter an ID max:826" className="input" />
         <button onClick={handleSearch} className="buttonAdd">Add</button>
         <button onClick={handleRandomClick} className='buttonRandom'>Random</button>
         <button className="buttonDelete" onClick={handleDeleteAll}>Delete all</button>
      </div>
   )
};

export default SearchBar;
