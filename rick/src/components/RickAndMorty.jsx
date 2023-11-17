import React from 'react';
import { Link } from "react-router-dom";
//RickAndMorty Component
const RickAndMorty = ()=>{

    
  
    return (
  
      <div>
        <Link to="/">Home</Link>
        <h1>welcome to Rick and Morty Universe</h1>
        {characters.map((character)=>{
            return(
            <div key={character.id}>
                <div>{character.name}</div>
                <img src={character.image} alt={character.name}/>
            </div>
        )})}
      </div>
    )
  }
  
  export default RickAndMorty;