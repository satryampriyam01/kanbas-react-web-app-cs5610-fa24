import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "./ReduxExamples/HelloRedux/helloReducer";
import addReducer from "../Lab4/ReduxExamples/AddRedux/addReducer";
import counterReducer from "./ReduxExamples/CounterRedux/counterReducer";
import todosReducer from "./ReduxExamples/todos/todosReducer";

const store = configureStore({
  reducer: { helloReducer, counterReducer, addReducer, todosReducer },
});
export default store;
