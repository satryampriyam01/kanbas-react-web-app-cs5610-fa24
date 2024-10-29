import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    assignments: assignments,
    assignment: {
        name: "New Assignment",
        description: "New Description",
        points: 100,
        course: "hi",
        _id: "",
        dueDateTime: new Date().toISOString().slice(0, 16),
        availableFromDate: new Date().toISOString().slice(0, 16),
        availableUntilDate: new Date().toISOString().slice(0, 16)
    }
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            // Ensure _id is provided in action.payload
            console.log("Adding assignment:", action.payload);
            const newAssignment = {
                ...action.payload,
                _id: action.payload._id || new Date().getTime().toString(),
            };
            state.assignments.push(newAssignment); // Use push to add to the end
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });
        },
        setAssignment: (state, action) => {
            state.assignment = action.payload;
        },
        cancelAssignmentUpdate: (state) => {
            state.assignment = initialState.assignment;
        },
    },
});

export const {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignment,
    cancelAssignmentUpdate,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
