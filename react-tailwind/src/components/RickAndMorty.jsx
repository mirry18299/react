import React from 'react';
import { useState, useEffect } from  'react';
import { Link } from "react-router-dom";
//RickAndMorty Component
const RickAndMorty = ()=>{
    //useState hook to store the data from the API (Default is an empty list)
    const [characters, setCharacters] = useState([])
  
    //Async function to fetch data from the API
    const fetchCharacters = async ()=>{
      const response = await fetch("https://rickandmortyapi.com/api/character")
      const data = await response.json()
      //Sets the data from the API to the characters state
      setCharacters(data.results)
    }
  
    //useEffect hook to fetch data from the API when the component is mounted
    useEffect (()=>{
      fetchCharacters()
      //Dependancy array is empty, so the useEffect hook will only run once when the component is mounted
    }, [])
  
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