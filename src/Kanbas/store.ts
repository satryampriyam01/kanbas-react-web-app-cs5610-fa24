import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import enrollmentReducer from "./Courses/EnrollmentReducer"; // Ensure this is the correct path

export interface KanbasState {
  modulesReducer: {
    modules: any[];
    module: any;
  };
  assignmentsReducer: {
    assignments: any[];
    assignment: any;
  };
  accountReducer: {
    account: any;
    accounts: any;
  };
  enrollmentReducer: { // Add this to the interface
    enrollments: any[];
    showAllCourses: boolean;
  };
}

const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentsReducer,
    enrollmentReducer, // Ensure this reducer is included
  },
});
export default store;
