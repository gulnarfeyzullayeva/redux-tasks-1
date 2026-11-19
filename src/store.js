import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import userReducer from "./user/userSlice";
import themeReducer from "./theme/themeSlice"
import studentReducer from "./student/studentSlice"
import todoReducer from "./todo/todoSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        theme: themeReducer,
        student: studentReducer,
        todo: todoReducer
    }
})