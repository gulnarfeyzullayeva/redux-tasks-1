import {useSelector, useDispatch} from "react-redux";
import { increase, decrease, resetScore } from "./studentSlice";

function Student() {
    const score = useSelector((state)=> state.student.score);
    const dispatch = useDispatch();

  return (
    <div>
      <h1>{score}</h1>
      <button onClick={()=>dispatch(increase())}>+10</button>
      <button onClick={()=>dispatch(decrease())}>-10</button>
      <button onClick={()=>dispatch(resetScore())}>Reset</button>
    </div>
  )
}
export default Student
