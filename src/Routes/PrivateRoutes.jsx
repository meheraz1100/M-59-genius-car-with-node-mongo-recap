import { useContext } from "react";
import { Authcontext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(Authcontext)
    const location = useLocation()
    console.log(location.pathname)

    if(loading){
       return <progress className="progress w-56"></progress>
    }


    if(user?.email){
        return children
    }

    return <Navigate state={location.pathname} to="/login" replace></Navigate>

};

export default PrivateRoutes;