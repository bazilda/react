import React from "react";
import {useSelector} from 'react-redux';

export const CounterSquare: React.FC = () => {
    const authUser= useSelector<any, string>(state=>state.auth.authUser);
    const counter = useSelector<any, number>(state=>state.count.counter);
    if (!authUser)
        return <div/>;
    else
    return <div>
        <p>counter value is {counter}, counter ** 2 is {counter ** 2}</p>
    </div>
}