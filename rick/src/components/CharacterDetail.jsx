import React from 'react';
import { useState, useEffect } from 'react';

function CharacterDetail({ character }) {

    const [characters, setCharacters] = useState([]);

    const fetchCharacters = async () => {
        const response = await fetch ("https://rickandmortyapi.com/api/character");
        const data = await response.json();

        setCharacters(data.results);
    };

    useEffect(() => {
     fetchCharacters();
    }, []);

    re
}