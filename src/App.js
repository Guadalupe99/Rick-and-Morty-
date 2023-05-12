import './App.css';
import axios from 'axios';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import Form from './components/Form.jsx';
import Favorites from './components/Favorites.jsx';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';


   const email = 'guadalupe.galbar@gmail.com';
   const password = 'holA275';

function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState (false);

   const login = (userData) => {
      if (userData.email === email&& userData.password === password){
         setAccess(true)
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   
   function onSearch(id) {

      // const URL_BASE = 'https//rickandmortyapi.com/api'

      // fetch(`${URL_BASE}/character/${id}`)
      // .then((response) => response.json())
      // .then((data) => {
      //    if (data.name) {
      //       if (!characters.find((char) => char.id === data.id)) {
      //       setCharacters((oldChars) => [...oldChars, data])}
      //       else {window.alert('Personaje existente')}
      //    } else {
      //       window.alert('No haypersonaje con este ID');
      //    }
      // })
   
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }
   
   
   const onClose = (id) => {
      const filterCharacters = characters.filter(character => character.id !== Number(id))
      setCharacters(filterCharacters)
   }
  
   return (
      <div className='App'>
         {
            location.pathname !== '/' && <Nav onSearch={ onSearch } />
         }
         <Routes>
            <Route path='/' element={ <Form login={login}/> } />
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose}/> } />
            <Route path='/about' element={ <About/> } />
            <Route path='/detail/:id' element={ <Detail/> } />
            <Route path='/favorites' element={ <Favorites/> } />
         </Routes>
      </div>
   );
}

export default App;
