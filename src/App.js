import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {Increment, Decrement} from './Reduux';

function App() {
  const state = useSelector((state)=>state)
  const dispatch = useDispatch();
  
  const {value} = state;
  return (
    <div>
      <h1>Deboprasad Counter:{value}</h1>
      <button class="button" onClick = { () => (dispatch(Increment()))}>Increment Please</button>
      <button class="button1" onClick = { () => (dispatch(Decrement()))}>Decrement Please</button>
    </div>
  );
}

export default App;
