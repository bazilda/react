import React, {useEffect, useRef, useState} from "react";
import { Alert } from "./Alert";
type Props = {
    findeNewTZ: (value: string)=>string;
    placeHolder: string;
    buttonName?: string;
}
export const Input: React.FC<Props> = ({findeNewTZ, placeHolder, buttonName}) => {
    const id = useRef<string>(Math.random().toString());
    const inputElement = useRef<HTMLInputElement | null>();
    const [message, setMessage] = useState<string>('')
    useEffect(() =>{
        inputElement.current = document.getElementById(id.current) as HTMLInputElement
    }, []);
    function inputProcess() {
       const tmpMsg=findeNewTZ(inputElement.current!.value);
       setMessage(findeNewTZ(inputElement.current!.value));
       if(!tmpMsg){
        inputElement.current!.value='';
       }
    //    else message=tmpMsg;
    }
    return <div>
        <input type="text" placeholder={placeHolder} id={id.current}/>
        <button onClick={inputProcess}>{buttonName || "GO"}</button>
        {message && <Alert message={message}/>}
    </div>

}