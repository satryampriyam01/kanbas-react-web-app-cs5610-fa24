// QuizDetails.tsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as quizzesClient from "./client";
import * as coursesClient from "../client";
import { FaPencil } from "react-icons/fa6";
import { setQuizzes } from "./reducer";

interface Quiz {
  _id: string;
  title: string;
  quizType: string;
  points: number;
  assignmentGroup: string;
  shuffleAnswers: boolean;
  timeLimit: number;
  allowMultipleAttempts: boolean;
  maxAttempts: number;
  showCorrectAnswers: boolean;
  accessCode: string;
  oneQuestionAtATime: boolean;
  webcam: boolean;
  lockQuestions: boolean;
  dueDate: string | null;
  availableFrom: string | null;
  availableUntil: string | null;
}

interface User {
  _id: string;
  role: "STUDENT" | "FACULTY" | "ADMIN";
  // Add other user properties as needed
}

interface RootState {
  quizzesReducer: {
    quizzes: Quiz[];
  };
  accountReducer: {
    currentUser: User | null;
  };
}

const QuizDetails: React.FC = () => {
  const { cid, qid } = useParams<{ cid: string; qid: string }>();
  const navigate = useNavigate();
  const { quizzes } = useSelector((state: RootState) => state.quizzesReducer);
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  const defaultQuiz = {
    course: cid,
    questions: [],
    maxAttempts: 1,
    title: "Quiz Title",
    description: "",
    quizType: "Graded Quiz",
    assignmentGroup: "Quizzes",
    shuffleAnswers: true,
    timeLimit: 20,
    points: 0,
    allowMultipleAttempts: false,
    assignTo: "Everyone",
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
    showCorrectAnswers: "Immediately",
    accessCode: "",
    oneQuestionAtATime: true,
    webcam: false,
    lockQuestions: false,
  };
  const [userAttempts, setUserAttempts] = useState<number | null>(null);
  const [loadingAttempts, setLoadingAttempts] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Find the current quiz based on qid
  const this_quiz = quizzes.find((quiz) => quiz._id === qid);

  useEffect(() => {
    const fetchUserAttempts = async () => {
      if (currentUser && currentUser._id && cid && qid) {
        try {
          const attemptData = await quizzesClient.getUserQuizAttempts(cid, qid);
          console.log("attemptData", attemptData);
          setUserAttempts(attemptData.attemptCount);
        } catch (err: any) {
          console.error("Error fetching user attempts:", err);
          setError("Failed to fetch your quiz attempts.");
        } finally {
          setLoadingAttempts(false);
        }
      } else {
        setLoadingAttempts(false);
      }
    };

    if (currentUser && this_quiz) {
      fetchUserAttempts();
    }
  }, [cid, qid, currentUser, this_quiz]);

  const handleBeginQuiz = async () => {
    if (!currentUser || !currentUser._id) {
      alert("You must be logged in to attempt the quiz.");
      return;
    }

    if (!this_quiz) {
      alert("Quiz not found.");
      return;
    }

    // Check if multiple attempts are allowed
    if (!this_quiz.allowMultipleAttempts) {
      // If multipleAttempts is false, allow only one attempt
      if (userAttempts && userAttempts >= 1) {
        alert("You have already attempted this quiz.");
        return;
      }
    } else {
      // If multipleAttempts is true, check against maxAttempts
      if (userAttempts !== null && userAttempts >= this_quiz.maxAttempts) {
        alert(
          `You have reached the maximum of ${this_quiz.maxAttempts} attempts for this quiz.`
        );
        return;
      }
    }

    try {
      // Increment the user's attempt count
      await quizzesClient.incrementUserQuizAttempt(cid!, qid!);
      // Optionally update the local state
      setUserAttempts((prev) => (prev !== null ? prev + 1 : 1));
      // Navigate to the quiz attempt page
      navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/Attempt`);
    } catch (err: any) {
      console.error("Error incrementing quiz attempt:", err);
      alert("Failed to begin the quiz. Please try again later.");
    }
  };

  if (!this_quiz) {
    return <div>Loading quiz details...</div>;
  }

  return (
    <div>
      {(currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN") && (
        <div>
          <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/Preview`}>
            <button className="btn btn-secondary me-2">Preview</button>
          </Link>
          <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/Edit/Details`}>
            <button className="btn btn-secondary">
              <FaPencil className="me-2" />
              Edit
            </button>
          </Link>
          <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/Review`}>
            <button className="btn btn-secondary ms-2">
              Review Last Attempt
            </button>
          </Link>
          <hr />
          <h3 className="mt-2 mb-4 ms-3">{this_quiz.title}</h3>
          {/* Quiz Details */}
          <div className="row">
            <div className="col-3 text-end">
              <span className="float-end">
                <strong>Quiz Type</strong>
              </span>
            </div>
            <div className="col-9">{this_quiz.quizType}</div>
          </div>
          <div className="row">
            <div className="col-3 text-end">
              <span className="float-end">
                <strong>Points</strong>
              </span>
            </div>
            <div className="col-9">{this_quiz.points}</div>
          </div>
          <div className="row">
            <div className="col-3  text-end">
              <span className="float-end">
                <strong>Assignment Group</strong>
              </span>
            </div>
            <div className="col-9">
              {this_quiz.assignmentGroup.toUpperCase()}
            </div>
          </div>
          <div className="row">
            <div className="col-3  text-end">
              <span className="float-end">
                <strong>Shuffle Answers</strong>
              </span>
            </div>
            <div className="col-9">
              {this_quiz.shuffleAnswers ? "Yes" : "No"}
            </div>
          </div>
          <div className="row">
            <div className="col-3 text-end">
              <span className="float-end">
                <strong>Time Limit</strong>
              </span>
            </div>
            <div className="col-9">{this_quiz.timeLimit} minutes</div>
          </div>
          <div className="row">
            <div className="col-3 text-end">
              <span className="float-end">
                <strong>Multiple Attempts</strong>
              </span>
            </div>
            <div className="col-9">
              {this_quiz.allowMultipleAttempts ? "Yes" : "No"}
            </div>
          </div>
          <div className="row">
            <div className="col-3 text-end">
              <span className="float-end">
                <strong>How Many Attempts</strong>
              </span>
            </div>
            <div className="col-9">{this_quiz.maxAttempts}</div>
          </div>
          <div className="row">
            <div className="col-3 text-end">
              <span className="float-end">
                <strong>Show Correct Answers</strong>
              </span>
            </div>
            <div className="col-9">
              {this_quiz.showCorrectAnswers ? "Yes" : "No"}
            </div>
          </div>
          <div className="row">
            <div className="col-3 text-end">
              <span className="float-end">
                <strong>Access Code</strong>
              </span>
            </div>
            <div className="col-9">{this_quiz.accessCode}</div>
          </div>
          <div className="row">
            <div className="col-3 text-end">
              <span className="float-end">
                <strong>One Question at a Time</strong>
              </span>
            </div>
            <div className="col-9">
              {this_quiz.oneQuestionAtATime ? "Yes" : "No"}
            </div>
          </div>
          <div className="row">
            <div className="col-3 text-end">
              <span className="float-end">
                <strong>Webcam Required</strong>
              </span>
            </div>
            <div className="col-9">{this_quiz.webcam ? "Yes" : "No"}</div>
          </div>
          <div className="row">
            <div className="col-3 text-end">
              <span className="float-end text-end">
                <strong>Lock Questions after Answering</strong>
              </span>
            </div>
            <div className="col-9">
              {this_quiz.lockQuestions ? "Yes" : "No"}
            </div>
          </div>
          <div className="row">
            <div className="col-3 text-end">
              <span className="float-end">
                <strong>Due</strong>
              </span>
            </div>
            <div className="col-9">
              <strong>
                {this_quiz.dueDate &&
                  new Date(this_quiz.dueDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
              </strong>
            </div>
          </div>
          <div className="row">
            <div className="col-3 text-end">
              <span className="float-end">
                <strong>Available</strong>
              </span>
            </div>
            <div className="col-9">
              from&nbsp;
              <strong>
                {this_quiz.availableFrom &&
                  new Date(this_quiz.availableFrom).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    }
                  )}
              </strong>
              &nbsp;until
              <strong>
                &nbsp;
                {this_quiz.availableUntil &&
                  new Date(this_quiz.availableUntil).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    }
                  )}
              </strong>
            </div>
          </div>
        </div>
      )}

      {currentUser?.role === "STUDENT" && (
        <div>
          <button
            className="btn btn-danger ms-3"
            onClick={handleBeginQuiz}
            disabled={loadingAttempts}
          >
            {loadingAttempts ? "Loading..." : "Begin Quiz"}
          </button>
          <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/Review`}>
            <button className="btn btn-secondary ms-3">
              Review Last Attempt
            </button>
          </Link>
          {error && <div className="text-danger mt-2">{error}</div>}
          {!loadingAttempts && (
            <div className="mt-2">
              <strong>
                Attempts:{" "}
                {userAttempts !== null
                  ? `${userAttempts} / ${this_quiz.maxAttempts}`
                  : "N/A"}
              </strong>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizDetails;
