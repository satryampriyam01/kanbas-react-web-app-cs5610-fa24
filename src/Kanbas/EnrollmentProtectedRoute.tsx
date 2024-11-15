import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function EnrollmentProtectedRoute({ children }: { children: any }) {
    const { cid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

    if (currentUser.role === "STUDENT" &&
        !enrollments.some((enrollment: any) =>
            enrollment.user === currentUser._id &&
            enrollment.course === cid)) {
        return <Navigate to="/Kanbas/Dashboard" />;
    } else {
        return children;
    }
}
