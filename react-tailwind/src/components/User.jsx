//User.jsx
import { useParams } from "react-router-dom"

const User =()=>{
  const { id } = useParams()

  return (
    <div>
      <h1>Showing User { id }</h1>
    </div>
  )
}
export default User;