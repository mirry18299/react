import { useSelector } from 'react-redux';
import TodoList from './components/TodoList.jsx';
import { Link } from "react-router-dom";

function App() {
  const state =useSelector((state) => ({...state}));
  console.log("state", state);
  return (
    <div className='App'>


<Link to='/todolist'></Link>
      <h2>State</h2>
      <TodoList />

    </div>
  );
}

export default App;
