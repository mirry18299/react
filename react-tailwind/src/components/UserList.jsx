import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//UserList Component
const UserList = ()=>{
  //state to store users fetched from Api
  const [users, setUsers] = useState([])

  //function to fetch users from api
  const fetchUsers = async ()=>{
    const response = await fetch ("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();

    setUsers(data)
  }

  //useEffect to fetch users from api
  useEffect(()=>{
    fetchUsers()
  }, [])
  return (
    <div>
      {
        users.map(( user )=>{
          return (
            <div key={user.id}>
              {/** Link component to direct to dynamic path and pass in state */}
              <Link to={`/user/${user.id}`} state={user}>View User</Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default UserList