import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const axiosWithCredentials = axios.create({ withCredentials: true });
// Fetch the number of attempts a user has made on a specific quiz
export const getUserQuizAttempts = async (courseId: string, quizId: string) => {
  const response = await axiosWithCredentials.get(
    `${COURSES_API}/${courseId}/quizzes/${quizId}/attempts`
  );
  return response.data; // Expected to return { quizId: string, userId: string, attemptCount: number }
};

// Client-side request updated to match server route
export const incrementUserQuizAttempt = async (
  courseId: string,
  quizId: string
) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/quizzes/${quizId}/attempt`
  );
  return response.data; // Expected to return updated attempt count or confirmation
};
