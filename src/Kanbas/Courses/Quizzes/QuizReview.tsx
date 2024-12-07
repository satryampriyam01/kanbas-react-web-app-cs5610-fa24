import { useParams, useNavigate, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateQuiz } from "./reducer";
import { useState } from "react";
import ProtectedRouteRole from "../ProtectedRouteRole";
import QuizQuestion from "./QuizQuestion";
import { RiErrorWarningLine } from "react-icons/ri";
import { FaPencil } from "react-icons/fa6";
import DOMPurify from "dompurify";

export default function QuizReview() {
  const { cid, qid } = useParams();
  const { pathname } = useLocation();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const dispatch = useDispatch();
  const [quiz, setQuiz] = useState(
    quizzes.find((quiz: { _id: string | undefined }) => quiz._id === qid) ?? {
      name: "",
      course: cid,
      description: "",
      questions: [],
    }
  );
  const navigate = useNavigate();
  const save = () => {
    console.log(quiz);
    dispatch(updateQuiz(quiz));
    navigate(`/Kanbas/Courses/${cid}/Quizzes`);
  };
  return (
    <div className="col col-lg-8 align-items-center justify-content-center ms-auto me-auto">
      <h2>{quiz.title || "Unnamed Quiz"}</h2>
      <ProtectedRouteRole>
        <div
          id="wd-todo-error-message"
          className="alert alert-danger mt-2 mb-2 border-0"
        >
          <RiErrorWarningLine className="text-danger me-2 fs-5" />
          This is a preview of the published version of the quiz
        </div>
      </ProtectedRouteRole>
      <div className="fs-3 m">
        <span className="fs-3 fw-bold">Last Attempt: </span>
        {quiz.attemptDate &&
          new Date(quiz.attemptDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
      </div>
      <div className="fs-3 mb-2">
        <span className="fs-3 fw-bold">Score: </span>
        {quiz.score || ""}/
        {quiz.questions.reduce(
          (sumQuestions: any, question: { points: any }) =>
            sumQuestions + (question.points || 0),
          0,
          0
        )}
      </div>
      <h3>Quiz Instructions</h3>
      <div className="mt-2">
        {
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(quiz.description),
            }}
          />
        }
      </div>
      <hr />
      <div>
        {quiz.questions.map((question: any) => (
          <QuizQuestion
            question={question}
            review={true}
            updateQuestion={(question) => {
              setQuiz({
                ...quiz,
                questions: quiz.questions.map((q: { _id: string }) =>
                  q._id === question._id ? question : q
                ),
              });
            }}
          />
        ))}
      </div>
      <hr />
      <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}`}>
        <button
          id="wd-quiz-cancel"
          className="btn btn-lg btn-secondary ms-4 me-1 float-end"
        >
          Back
        </button>
      </Link>
    </div>
  );
}
