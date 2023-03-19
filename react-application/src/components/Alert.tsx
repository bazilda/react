import React from "react";

type Props = {
    message: string
}
export const Alert: React.FC<Props> = ({message}) => {
    return <div style={{border: "solid 2px red", color: "red"}}>{message}</div>
}