import React from "react";
import { Input } from "./Input";
import { authActions } from "../redux/authSlice";
import { useDispatch, useSelector } from 'react-redux';
type Props = {
   
}
export const Logout: React.FC<Props> = ({ }) => {
    const authUser= useSelector<any, number>(state=>state.auth.authUser);
    const dispatch = useDispatch();

    if (!authUser)
        return <div/>;
    else
        return (<div>
                <button onClick={() => dispatch(authActions.logout())}>
                    Logout</button>
            </div>);
}