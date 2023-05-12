import { connect, useDispatch } from 'react-redux';
import Card from './Card.jsx';
import { filterCards, orderCards } from '../redux/actions.js';
import { useState } from 'react';


const Favorites = ({myFavorites}) => {
    const dispatch = useDispatch();
    const [aux, setAux ] = useState (false);

    const  handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(true);
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    }
    return (
        <div>
            <select onChange = {handleOrder}>
                <option value = 'A'>Asendente</option>
                <option value = 'B'>Desendente</option>
            </select>

            <select onChange = {handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                <option value= 'losCharacters'>losCharacters</option>
            </select>
        {
            //ponemos el condicional '?' para preguntar si hay algo en my favorites? y asi evitamos que se nos rompa el codigo
            myFavorites?.map(fav => {
                return(
                    <Card 
                    key={ fav.id }
                    id={ fav.id }
                    name={ fav.name }
                    species={ fav.species }
                    gender={ fav.gender }
                    image={ fav.image }
                    origin={ fav.origin }
                    onClose={ fav.onClose }
                    />
                )
            })

        }
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}


export default connect(
    mapStateToProps,
    null
)(Favorites);