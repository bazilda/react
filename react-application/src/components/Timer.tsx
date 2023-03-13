import React, { useEffect } from "react"
import { json } from "stream/consumers";
import timeZones from "../time-zones";
type Props = {
    cityCountry: string;
}
export const Timer: React.FC<Props> = ({ cityCountry }) => {
  //  const styles: React.CSSProperties = { backgroundColor: "lightblue", fontSize: "2em" };

    const [time, setTime] = React.useState(new Date());

    useEffect(() => {
       const tickInterval = setInterval(tic, 1000);
       return () => { 
            clearInterval(tickInterval);
        }
    }, []);

   function tic() {
        setTime(new Date());
    }

    return <>
        <h2 >Current Time in {cityCountry}</h2>
        <p>{time.toLocaleTimeString(undefined, { timeZone: findTimeZoneName(cityCountry) })}</p>
    </>
}


function findTimeZoneName (cityName: string): string | undefined{
    const ind = timeZones.findIndex(tz=>JSON.stringify(tz).includes(cityName));
    if (ind < 0)
        return "Asia/Jerusalem";
    return timeZones[ind].name;
}