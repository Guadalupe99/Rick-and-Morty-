import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types"

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, {type, payload}) => {
    switch (type){
        case ADD_FAV:
            return{
                ...state,
                myFavorites: [...state.allCharacters, payload ],
                allCharacters: [...state.allCharacters, payload ]
            }
        
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== payload)
            }

        case FILTER:
            const characterFilter = state.allCharacters.filter( character => character.gender === payload )
            return{
                ...state,
                myFavorites:
                payload === 'losCharacters'
                ? [...state.losCharacter] 
                : characterFilter
            }

        case ORDER:
            const characterOrder = [...state.allCharacters]
            return{
                ...state,
                myFavorites:
                payload === 'A'
                ? characterOrder.sort((a,b) => a.id - b.id) 
                : characterOrder.sort((a,b) => b.id - a.id) 
            }
        
        default:
            return{
                ...state
            };
    }
}

export default reducer;