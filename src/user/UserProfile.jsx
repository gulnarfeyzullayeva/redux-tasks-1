import { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import { changeName } from "./userSlice";

function UserProfile(){
    const name = useSelector((state)=>state.user.name);
    const dispatch = useDispatch();
    const [newName, setNewName]=useState("");

    return (
        <div>
            <h3>Ad: {name}</h3>
            <input type="text" value={newName} onChange={(e)=>setNewName(e.target.value)}/>
            <button onClick={()=> {
                if (newName.trim()!==""){
                    dispatch(changeName(newName));
                    setNewName("");
                }
            }}>Change name</button>
        </div>
    )
}
export default UserProfile;