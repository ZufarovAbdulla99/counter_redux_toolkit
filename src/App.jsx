import './App.css'
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from './store/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <div style={{ background: "#0284c7", padding: "0.25rem 2rem", borderRadius: "12px", border: "0.25rem solid black"}}>
      <h2 style={{fontSize: "2.25rem"}}>Simple Counter</h2>
      <h3 style={{fontSize: "2rem", lineHeight: "1.5"}}>{count}</h3>
      <div className='btns'>
        <button className='minus' onClick={() => dispatch(decrement())}>-</button>
        <button className='reset' onClick={() => dispatch(reset())}>Reset</button>
        <button className='plus' onClick={() => dispatch(increment())}>+</button> 
      </div>
    </div>
  )
}

export default App
