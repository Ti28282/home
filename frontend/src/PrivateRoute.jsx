import { Navigate, Outlet } from "react-router";
import { useAuth } from "./AuthContext";

const PrivateRoute = () => {
    const { isAuthenticated } = useAuth();

    if( isAuthenticated ) {
        return <Outlet/>
    } else {
        return <Navigate to="/"/>
    }
};

export default PrivateRoute