import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";

const PrivetRouter = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <Spinner className="h-16 w-16 text-gray-900/50" />;
    }

    if (!user) {
        return <Navigate state={location.pathname} to='/login' />;
    }

    return children;
};

export default PrivetRouter;