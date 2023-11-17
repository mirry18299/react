import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//UserList Component
const EpisodeList = ()=>{
  //state to store users fetched from Api
  const [episodes, setEpisodes] = useState([])

  //function to fetch users from api
  const fetchEpisodes = async ()=>{
    const response = await fetch ("https://rickandmortyapi.com/api/episode")
    const data = await response.json();

    setEpisodes(data.results)
  }

  //useEffect to fetch users from api
  useEffect(()=>{
    fetchEpisodes()
  }, [])
  return (
    <div>
      {
        episodes.map(( episode )=>{
          return (
            <div key={episode.id}>
              {/** Link component to direct to dynamic path and pass in state */}
              <Link to={`/episode/${episode.id}`} state={episode}>View Episode</Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default EpisodeList