import React from 'react'
import { Card, Button } from 'react-bootstrap'
// import { isInTeam } from '../App'

/**
 * 
 * @param {name} string 
 * @param {pokedexNumber} string
 * @param {image} string
 * @param {types} array
 * @param {height} number
 * @param {weight} number
 * @param {generation} string
 * @param {baseStatsTotal} number
 * @returns 
 */
export default function Pokemon({pokemon, addToTeam, removeFromTeam, inTeam}) {
  // get images for types
  let type1Img = ""
  let type2Img = ""
  if (pokemon.types[0] === "Normal") {
    type1Img = "https://archives.bulbagarden.net/media/upload/c/c6/NormalIC_PE.png"
  } else if (pokemon.types[0] === "Fighting") {
    type1Img = "https://archives.bulbagarden.net/media/upload/6/64/FightingIC_PE.png"
  } else if (pokemon.types[0] === "Flying") {
    type1Img = "https://archives.bulbagarden.net/media/upload/7/76/FlyingIC_PE.png"
  } else if (pokemon.types[0] === "Poison") {
    type1Img = "https://archives.bulbagarden.net/media/upload/e/e1/PoisonIC_PE.png"
  } else if (pokemon.types[0] === "Ground") {
    type1Img = "https://archives.bulbagarden.net/media/upload/b/be/GroundIC_PE.png"
  } else if (pokemon.types[0] === "Rock") {
    type1Img = "https://archives.bulbagarden.net/media/upload/e/ed/RockIC_PE.png"
  } else if (pokemon.types[0] === "Bug") {
    type1Img = "https://archives.bulbagarden.net/media/upload/0/06/BugIC_PE.png"
  } else if (pokemon.types[0] === "Ghost") {
    type1Img = "https://archives.bulbagarden.net/media/upload/7/77/GhostIC_PE.png"
  } else if (pokemon.types[0] === "Steel") {
    type1Img = "https://archives.bulbagarden.net/media/upload/8/81/SteelIC_PE.png"
  } else if (pokemon.types[0] === "Fire") {
    type1Img = "https://archives.bulbagarden.net/media/upload/e/ea/FireIC_PE.png"
  } else if (pokemon.types[0] === "Water") {
    type1Img = "https://archives.bulbagarden.net/media/upload/e/e1/WaterIC_PE.png"
  } else if (pokemon.types[0] === "Grass") {
    type1Img = "https://archives.bulbagarden.net/media/upload/3/3f/GrassIC_PE.png"
  } else if (pokemon.types[0] === "Electric") {
    type1Img = "https://archives.bulbagarden.net/media/upload/e/ee/ElectricIC_PE.png"
  } else if (pokemon.types[0] === "Psychic") {
    type1Img = "https://archives.bulbagarden.net/media/upload/3/37/PsychicIC_PE.png"
  } else if (pokemon.types[0] === "Ice") {
    type1Img = "https://archives.bulbagarden.net/media/upload/9/94/IceIC_PE.png"
  } else if (pokemon.types[0] === "Dragon") {
    type1Img = "https://archives.bulbagarden.net/media/upload/1/1b/DragonIC_PE.png"
  } else if (pokemon.types[0] === "Dark") {
    type1Img = "https://archives.bulbagarden.net/media/upload/a/a2/DarkIC_PE.png"
  } else if (pokemon.types[0] === "Fairy") {
    type1Img = "https://archives.bulbagarden.net/media/upload/a/a4/FairyIC_PE.png"
  }
  // if there is a second type, get the image for that type
  if (pokemon.types[1]) {
    if (pokemon.types[1] === "Normal") {
      type2Img = "https://archives.bulbagarden.net/media/upload/c/c6/NormalIC_PE.png"
    } else if (pokemon.types[1] === "Fighting") {
      type2Img = "https://archives.bulbagarden.net/media/upload/6/64/FightingIC_PE.png"
    } else if (pokemon.types[1] === "Flying") {
      type2Img = "https://archives.bulbagarden.net/media/upload/7/76/FlyingIC_PE.png"
    } else if (pokemon.types[1] === "Poison") {
      type2Img = "https://archives.bulbagarden.net/media/upload/e/e1/PoisonIC_PE.png"
    } else if (pokemon.types[1] === "Ground") {
      type2Img = "https://archives.bulbagarden.net/media/upload/b/be/GroundIC_PE.png"
    } else if (pokemon.types[1] === "Rock") {
      type2Img = "https://archives.bulbagarden.net/media/upload/e/ed/RockIC_PE.png"
    } else if (pokemon.types[1] === "Bug") {
      type2Img = "https://archives.bulbagarden.net/media/upload/0/06/BugIC_PE.png"
    } else if (pokemon.types[1] === "Ghost") {
      type2Img = "https://archives.bulbagarden.net/media/upload/7/77/GhostIC_PE.png"
    } else if (pokemon.types[1] === "Steel") {
      type2Img = "https://archives.bulbagarden.net/media/upload/8/81/SteelIC_PE.png"
    } else if (pokemon.types[1] === "Fire") {
      type2Img = "https://archives.bulbagarden.net/media/upload/e/ea/FireIC_PE.png"
    } else if (pokemon.types[1] === "Water") {
      type2Img = "https://archives.bulbagarden.net/media/upload/e/e1/WaterIC_PE.png"
    } else if (pokemon.types[1] === "Grass") {
      type2Img = "https://archives.bulbagarden.net/media/upload/3/3f/GrassIC_PE.png"
    } else if (pokemon.types[1] === "Electric") {
      type2Img = "https://archives.bulbagarden.net/media/upload/e/ee/ElectricIC_PE.png"
    } else if (pokemon.types[1] === "Psychic") {
      type2Img = "https://archives.bulbagarden.net/media/upload/3/37/PsychicIC_PE.png"
    } else if (pokemon.types[1] === "Ice") {
      type2Img = "https://archives.bulbagarden.net/media/upload/9/94/IceIC_PE.png"
    } else if (pokemon.types[1] === "Dragon") {
      type2Img = "https://archives.bulbagarden.net/media/upload/1/1b/DragonIC_PE.png"
    } else if (pokemon.types[1] === "Dark") {
      type2Img = "https://archives.bulbagarden.net/media/upload/a/a2/DarkIC_PE.png"
    } else if (pokemon.types[1] === "Fairy") {
      type2Img = "https://archives.bulbagarden.net/media/upload/a/a4/FairyIC_PE.png"
    }
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pokemon.image} className="PokeImage"/>
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <Card.Text>
          #{pokemon.pokedexNumber}
        </Card.Text>
        <Card.Img src={type1Img} className="type-icon"/>
        {pokemon.types[1] && <Card.Img src={type2Img} className="type-icon"/>}
        <Card.Text>
          Height: {pokemon.height} m
          {", "}
          Weight: {pokemon.weight} kg
        </Card.Text>
        <Card.Text>
          Base Stats Total: {pokemon.baseStatsTotal}
        </Card.Text>
        <Card.Text>
          {pokemon.generation}
        </Card.Text>
        {inTeam(pokemon) ? (
          <Button variant="danger" onClick={() => removeFromTeam(pokemon)}>Remove from Team</Button>
        ) : (
          <Button variant="success" onClick={() => addToTeam(pokemon)}>Add to Team</Button>
        )}
      </Card.Body>
    </Card>
  )
}

