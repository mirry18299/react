import { useParams } from "react-router-dom"

const Episode =()=>{
  const { id } = useParams()

  return (
    <div>
      <h1>Showing Episode { id }</h1>
    </div>
  )
}
export default Episode;