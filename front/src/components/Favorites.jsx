import { useSelector } from "react-redux";
import Card from "./Card";
import { orderCards, filterCards } from "../redux/actions";
import { useDispatch } from "react-redux";
import '../styles/favorites.css'



const Favorites = () => {
    const myFavorites = useSelector((state) => state.myFavorites);
    const dispatch = useDispatch();

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value));
    }
    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }

    return (
        <div>
            <div className="container-select">
                <select className="select-fav" name="order" id="order" onChange={handleOrder}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
                <select className="select-fav" name="filter" id="filter" onChange={handleFilter}>
                    <option value="ALL">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
            <div className='box-flip'>
                {
                    myFavorites.map(({ id, name, gender, image }) => {
                        return (
                            <Card
                                key={id}
                                id={id}
                                name={name}
                                gender={gender}
                                image={image}
                            />
                        );
                    })
                }
            </div>
        </div >
    );
}


export default Favorites;