import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbars from "./switch"
import LionKing from "./Assests/LionKing.jpg"
import Bahubali from  "./Assests/Bahubali.jpg"
import JungleBoy from "./Assests/JungleBoy.jpg"
import MovieList from './component/MovieList';
import Filter from './component/Filter';
import Since from './footer';
import AddMovie from './component/AddMovie';
import MovieDetails from './component/movieDetails';


  const App = () => {
    const [movies, setMovies] = useState([
      // Add your movies here
      { title: 'The Lion King', 
      description: `“The Lion King” is a captivating tale set in the African savanna 
      The story follows Simba, a young lion prince who idolizes his father
      King Mufasa, and is eager to take his place as king of the Pride Lands.`, 
      trailerLink: "https://www.youtube.com/watch?v=7TavVZMewpY",
      posterURL: LionKing, 
      rating: <button className='Btn'>4.5</button>},

      { title: '365 days', 
      description: ` "Baahubali:" The Beginning is a 2015 Indian Telugu-language epic action film co-written and directed by S. S. Rajamouli. 
      The film was produced in Tollywood and was filmed in both Telugu and Tamil languages simultaneously`,
      trailerLink: "https://www.youtube.com/watch?v=iXdw5wYI4cY",
      posterURL: Bahubali, 
      rating: <button className='Btn'>4.9</button>},

      { title: 'Jungle boy', 
      description: `“Jungle Boy” is a family adventure film that was released in 199812. 
      The movie revolves around a boy who lives harmoniously with animals in the jungles of India`,
      trailerLink: "https://www.youtube.com/watch?v=R_2BhW2Lw5k",
      posterURL: JungleBoy, 
      rating: <button className='Btn'>4.0</button>},
    ]);

    const addMovieToList = (movie) => {
    setMovies((previous) => [...previous, movie])
    } 
  
    const [filter, setFilter] = useState('');
  
    const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(filter.toLowerCase()) || movie.rating >= Number(filter));

    return (
      <>
      <Navbars/>
      <Filter setFilter={setFilter} />
      <Router>
        <Routes>
          {/* <Filter setFilter={setFilter} /> */}
          <Route path="/" exact element={<MovieList movies={filteredMovies} filter={filter} />}>

            {/* <AddMovie addMovie={addMovieToList}/> */}
          </Route>
          <Route path="/movies/:title" element={<MovieDetails movies={movies} />}>
          </Route>
        </Routes>
      </Router>
      <AddMovie addMovie={addMovieToList}/> 
      <Since/>
      </>
    );
  };
  
  export default App;
