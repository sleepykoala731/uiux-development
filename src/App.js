import "./App.css";
import { useEffect, useState } from "react";
import pokemonData from "./assets/pokemon-data.json";
import Pokemon from "./components/Pokemon";
import { Card, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // use useState to create a state variable to hold the state of the team
  const [team, setTeam] = useState([]);
  const [sortMode, setSortMode] = useState("number");
  const [pokemonList, setPokemonList] = useState(pokemonData);
  const [filteredTypes, setFilteredTypes] = useState([]);
  const [filteredGenerations, setFilteredGenerations] = useState([]);


  // the team should only be able to hold one of each pokemon
  const addToTeam = (pokemon) => {
    // console.log(team)
    if (!team.includes(pokemon)) {
      setTeam([...team, pokemon]);
    }
  };

  const removeFromTeam = (pokemon) => {
    setTeam(team.filter((item) => item !== pokemon));
  };

  // define a boolean function to check if the pokemon is in the team
  const isInTeam = (pokemon) => {
    return team.includes(pokemon);
  };

  // useEffect for sorting and filtering
  useEffect(() => {
    let filteredPokemon = [...pokemonData];
    if (filteredTypes.length > 0) {
      filteredPokemon = filteredPokemon.filter((pokemon) =>
        pokemon.types.some((type) => filteredTypes.includes(type))
      );
    }
    if (filteredGenerations.length > 0) {
      filteredPokemon = filteredPokemon.filter((pokemon) =>
        filteredGenerations.includes(pokemon.generation)
      );
    }
    if (sortMode === "number") {
      filteredPokemon.sort((a, b) => a.pokedexNumber - b.pokedexNumber);
    } else if (sortMode === "height") {
      filteredPokemon.sort((a, b) => a.height - b.height);
    } else if (sortMode === "weight") {
      filteredPokemon.sort((a, b) => a.weight - b.weight);
    }
    setPokemonList(filteredPokemon);
  }, [sortMode, filteredTypes, filteredGenerations]);

  return (
    <div className="App">
      <h1>Pokemon Team Builder</h1>

      <Container>
        <Row>
        <Col sm={9}>
      <Container fluid="md">
      <Row xs={1} md={2} lg={3} className="g-4">
        {pokemonList.map((item, index) => (
          <Col>
            <Pokemon key={index} pokemon={item} addToTeam={addToTeam} removeFromTeam={removeFromTeam} inTeam={isInTeam} />
          </Col>
        ))}
      </Row>
      </Container>
      </Col>

      <Col sm={3}>
      <Container fluid="md">
      <div>
        <Card border="success">
          {/* Team list that lists the names of all pokemon in the team and accumulates their total base stats */}
          <h2>Team</h2>
          <ListGroup variant="flush">
            {Object.keys(team).map((item, index) => (
              <ListGroup.Item key={index}>{team[item].name}</ListGroup.Item>
            ))}
          </ListGroup>
          <h5 style={{padding: '1rem'}}>Total Base Stats: {Object.keys(team).reduce((total, item) => {
            let price = total + team[item].baseStatsTotal;
            return price;
          }, 0)}</h5>
        </Card>
      </div>
      </Container>
      <Container fluid="md">
      <Card border="primary">
      <div>
        {/* dropdown to select the current sorting method (pokedex number, height, or weight) */}
        <h5>Sort by</h5>
        <Form.Select onChange={(e) => setSortMode(e.target.value)} className="sort-dropdown" >
          <option value="number">Pokedex Number</option>
          <option value="height">Height</option>
          <option value="weight">Weight</option>
        </Form.Select>
      </div>
      </Card>
      <Card border="info">
      <div style={{padding: '10px'}}>
        {/* checkboxes to filter the pokemon by type */}
        <h5>Filter by Type</h5>
        <Form>
          {
            Array.from(new Set(pokemonData.map(pokemon => pokemon.types).flat())).map((type, index) => (
              <Form.Check
                key={index}
                type="checkbox"
                label={type}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFilteredTypes([...filteredTypes, type])
                  } else {
                    setFilteredTypes(filteredTypes.filter(item => item !== type))
                  }
                }
                }
              />
            ))
          }
        </Form>
      </div>
      <div style={{padding: '10px'}}>
        {/* checkboxes to filter the pokemon by generation */}
        <h5>Filter by Generation</h5>
        <Form>
            {Array.from(["Generation I", "Generation II", "Generation III"]).map((item, index) => (
              <Form.Check
                type="checkbox"
                label={item}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFilteredGenerations([...filteredGenerations, item]);
                  } else {
                    setFilteredGenerations(filteredGenerations.filter((generation) => generation !== item));
                  }
                }
                }
              />
            ))}
          </Form>
      </div>
      </Card>
      </Container>
      </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
