import React from "react";
import { useDispatch } from 'react-redux';
import { counterActions } from "../redux/counterSlice";
type Props = {
    operand: number
}
export const CounterUpdater: React.FC<Props> = ({ operand }) => {
    const dispatch = useDispatch();
    return <div>
        <button onClick={() => dispatch(counterActions.increment(operand))}>
            Increment</button>
        <button onClick={() => dispatch(counterActions.decrement(operand))}>
            Decrement</button>
        <button onClick={() => dispatch(counterActions.reset())}>
            Reset</button>

    </div>
}