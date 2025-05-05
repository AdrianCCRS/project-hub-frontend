import { useAuth } from "../context/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user } = useAuth();
    return user ? children : <Navigate to="/login" state={{from: location}} replace />;
}

export default PrivateRoute;