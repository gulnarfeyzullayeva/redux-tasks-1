import {useSelector, useDispatch} from "react-redux";
import { toggleTheme } from "./themeSlice";

function Theme() {
    const mode = useSelector((state)=>state.theme.mode);
    const dispatch = useDispatch();
  return (
    <div style={{
        backgroundColor: mode==="light" ? "white" : "black",
        color: mode==="light" ? "black" : "white",
        padding: "20px"
    }}>
        <h2>DARK / LIGHT</h2>
        <button onClick={()=>dispatch(toggleTheme())}>Change Theme</button>
      
    </div>
  )
}

export default Theme
