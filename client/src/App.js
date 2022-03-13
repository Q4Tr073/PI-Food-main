import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';
import React from 'react';
import RecipeCreator from './Components/RecipeCreator';
import Detail from './Components/Detail';


function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route exact path="/" element= {<LandingPage/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/recipe" element={<RecipeCreator/>}></Route>
        <Route path="/recipes/:id" element={<Detail/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;