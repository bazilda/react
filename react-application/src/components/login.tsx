import React from "react";
import { Input } from "./Input";
import { authActions } from "../redux/authSlice";
import { useDispatch, useSelector } from 'react-redux';

type Props = {  
}

export const Login: React.FC<Props> = ({}) => {
    const authUser= useSelector<any, number>(state=>state.auth.authUser);

    const dispatch = useDispatch();

    // Called by Input component
    let inpFunc = (username:string)=>{
        if (username.length == 0)
            return "username cannot be empty";
    
        console.log("user name is:" + username);

        dispatch(authActions.login(username));
        
        return '';
    }

    if (authUser)
        return <div/>;
    else
        return (<Input submitFn={inpFunc} placeHolder={"Enter username, please"}></Input>);
}