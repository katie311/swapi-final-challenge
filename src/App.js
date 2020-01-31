import React, { useState, useEffect } from 'react';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Characters from './components/Characters';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Planets from './components/Planets';

function App() {
  const [characters, setCharacters] = useState([])
  const [planets, setPlanets] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCharacters() {
      let res = await fetch('https://swapi.co/api/people/?format=json');
      let data = await res.json();
      setCharacters(data.results)
    }

    async function fetchPlanets() {
      let res = await fetch('https://swapi.co/api/planets/?format=json');
      let data = await res.json();
      setPlanets(data.results);
    }

    fetchCharacters();
    fetchPlanets();
    setLoading(false);
  }, []);
  return (
    <>
      <Router>
        <NavBar />
          <Container>
            { loading ? (
              <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
              </Dimmer>
            ) : (
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/characters'>
                <Characters data={characters} />
              </Route>
              <Route exact path='/planets'>
                <Planets data={planets}/>
              </Route>
            </Switch>
            )}
          </Container>
      </Router>
      </>
  );
}

export default App;
