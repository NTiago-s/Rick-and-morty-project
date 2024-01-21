const initialState = {
    myFavorites: [],
    allCharacters: [],
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAV':
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            };
        case 'REMOVE_FAV':
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            };


        case "FILTER":
            if (action.payload === "ALL") {
                return {
                    ...state,
                    myFavorites: state.allCharacters,
                };
            }
            const filteredCharacters = state.allCharacters.filter(
                (char) => char.gender === action.payload
            );
            return {
                ...state,
                myFavorites: filteredCharacters,
            };
        case "ORDER":
            let copy = [...state.myFavorites];
            copy.sort((a, b) => {
                if (action.payload === "A") {
                    if (a.id > b.id) return 1;
                    if (a.id < b.id) return -1;
                    return 0;
                } else {
                    if (a.id > b.id) return -1;
                    if (a.id < b.id) return 1;
                    return 0;
                }
            });
            return {
                ...state,
                myFavorites: copy,
            };
        default:
            return state;
    }
};

export default Reducer;
