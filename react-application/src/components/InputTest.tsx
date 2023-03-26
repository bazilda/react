import React, { useState } from "react";
import { Input } from "./Input";
import { Timer } from "./Timer";
export const InputTest:React.FC = () =>
{
    const [inputValue, setInputValue] = useState<string>('')
    function submit(value: string): string {
        let res = '';
        if(value.toLowerCase().includes("hello")) {
            res = " the city is undefined, this is why you have Israels time ";
        } else {
            setInputValue(value);
        }

        return res;
    }
    return <div>
        <Input findeNewTZ={submit} placeHolder={"enter new city/country "} buttonName="enter"/>
        {/* <p>{cityCountry  cityName=inputValue}</p>   */}
    </div>
}