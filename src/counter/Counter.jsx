import {useSelector, useDispatch} from "react-redux";
import { increment, decrement,reset } from "./counterSlice";

export default function Counter(){
    const count = useSelector((state)=>state.counter.count);
    const dispatch = useDispatch();

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>dispatch(increment())}>Artir</button>
            <button onClick={()=>dispatch(decrement())}>Azalt</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>
        </div>
    )
}
