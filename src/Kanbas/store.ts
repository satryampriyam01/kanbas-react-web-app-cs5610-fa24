import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import accountReducer from "./Account/reducer";
import enrollmentsReducer from "./reducer";
import quizzesReducer from "./Courses/Quizzes/reducer";





export interface KanbasState {
  quizReducer: {
      quizzes: any[];
      quiz: any;
  };
}


const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer,
    accountReducer,
    enrollmentsReducer,
    quizzesReducer
  },
});
export default store;