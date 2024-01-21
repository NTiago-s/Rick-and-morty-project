import { useState } from "react";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import '../styles/detail.css';


const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
            ({ data }) => {
                if (data.name) {
                    setCharacter(data);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            }
        );
        return setCharacter({});
    }, [id]);

    return (
        <div className="detail-container">
            <div className="button-container__detail">
                <Link to='/home'>
                    <button className="button-detail"> Back Home </button>
                </Link>
            </div>
            <div className="container-info">
                <div className="imgContainerDetail">
                    <div className="imgDetail">
                        <img src={character.image && character.image} alt={character.name && character.name} className="cartas" />
                    </div>
                </div>
                <div className="data-detail">
                    <div className="datos">
                        <h2>Name: "{character.name && character.name}"</h2>
                        <h2>Status: "{character.status && character.status}"</h2>
                        <h2>Species: "{character.species && character.species}"</h2>
                        <h2>Gender: "{character.gender && character.gender}"</h2>
                        <h2>Origin: "{character.origin?.name && character.origin?.name}"</h2>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Detail;