import {createSlice} from "@reduxjs/toolkit";

const studentSlice = createSlice({
    name: "student",
    initialState: {
        score: 0
    },
    reducers: {
        increase: (state)=>{
            if(state.score<100){
                state.score += 10;
            }
        },
        decrease: (state)=>{
            if(state.score>0){
                state.score -= 10;
            }
        },
        resetScore: (state) => {
            state.score=0;
        }
    }
})
export const {increase, decrease, resetScore} =studentSlice.actions;
export default studentSlice.reducer;