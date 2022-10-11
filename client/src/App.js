import React from 'react';
import { Route } from 'react-router-dom';
import CreateVideoGame from './components/Create_Video_Game/CreateVideoGame';
import Details from './components/Details/Details';
import Home from './components/Home/Home';
import LandingPage from './components/Landing_Pages/LandingPage';

function App() {
  return (
    <div>
      <Route exact path={'/'} component={LandingPage} />
      <Route path={'/home'} component={Home} />
      <Route path={'/created_video_games'} component={CreateVideoGame} />
      <Route path={'/videogames/:id'} component={Details} />
    </div>
  );
}

export default App;
