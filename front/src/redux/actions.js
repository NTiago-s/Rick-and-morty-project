import axios from "axios";

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, character);
            console.log("Esto es del ADDFAV " + data);
            dispatch({
                type: 'ADD_FAV',
                payload: data,
            });
        } catch (error) {
            throw Error(error.message);
        }
    };
};

export const removeFav = (id) => {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(endpoint);
            dispatch({
                type: 'REMOVE_FAV',
                payload: data,
            });
        } catch (error) {
            throw Error(error.message);
        }
    };
};

export const filterCards = (gender) => {
    return { type: "FILTER", payload: gender }
}

export const orderCards = (orden) => {
    return { type: "ORDER", payload: orden }
}
