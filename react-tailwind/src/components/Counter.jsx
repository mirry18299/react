
const Counter = (props)=>{
  return (
    <div>
      <h1>Counter App</h1>
      {/**Display the count variable */}
      <h2> {props.count} </h2>

      {/**Increment button, takes in handleIncrement as value */}
      <button onClick={props.handleIncrement}> + </button>
      {/**Decrement button, takes in handleDecrement as value */}
      <button onClick={props.handleDecrement}> - </button>
    </div>
  )
}

export default Counter