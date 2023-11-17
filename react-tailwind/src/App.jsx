import { useReducer } from 'react';
import Counter from "./components/Counter";
import DisplayData from "./components/DisplayData";
import { Link } from "react-router-dom";
import UserList from './components/UserList';




const countReducer = (state, action) => {
  switch (action.type){
    case 'increment':
      return{ count: state.count + 1 }
      case 'decrement':
      return{ count: state.count - 1 }
    default:
    break;
  }
}
export default function App(){
  const [state, dispatch] = useReducer(countReducer, {count:0});

  
  const handleIncrement = ()=>{
    dispatch({type: 'increment'})
  }
  const handleDecrement = ()=>{
    dispatch({type: 'decrement'})
  
  }

  return (

    <div>
      {/**Pass the count state variable, handleIncrement and handleDecrement functions as props to the Counter component */}
      <Counter count={state.count} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
      <DisplayData/>
      <Link to='/rickandmorty'>Check out Rick and Morty</Link>
      <h2>users</h2>
      <UserList/>
    </div>
  )
  }