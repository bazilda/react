import React, { useEffect } from "react"
import { json } from "stream/consumers";
import timeZones from "../time-zones";
type Props = {
    cityCountry: string;
}
export const Timer: React.FC<Props> = ({ cityCountry }) => {
    const styles: React.CSSProperties = { backgroundColor: "lightblue", fontSize: "2em" };

    const [time, setTime] = React.useState(new Date());

    useEffect(() => {
       const tickInterval = setInterval(tic, 1000);
       return () => { 
            clearInterval(tickInterval);
        }
    }, []);


    //useEffect(() => {let timeZone =  (); }, [cityCountry]);

    function tic() {
        setTime(new Date());
    }

    return <>
        <h2 >Current Time in {cityCountry}</h2>
        <p>{time.toLocaleTimeString(undefined, { timeZone: findTimeZone(cityCountry).name })}</p>
    </>

    // return <>
    //     <h2 style={cityNameStyle}>Current Time in{cityCountry}</h2>
    //     <p >{time.toLocaleTimeString(undefined, { timeZone: findTimeZone(cityCountry) })}</p>
    // </>
}

function findTimeZone(cityName: string) {
    for (let timeZone of timeZones) {

        if (timeZone.countryName == cityName)
            return timeZone;

        for (const city of timeZone.mainCities) {
            if (city == cityName)
                return timeZone;
        }
    }

    return {
        "name": "Asia/Jerusalem",
        "alternativeName": "Israel Time",
        "group": ["Asia/Jerusalem"],
        "continentCode": "AS",
        "continentName": "Asia",
        "countryName": "Israel",
        "countryCode": "IL",
        "mainCities": ["Jerusalem", "Tel Aviv"],
        "rawOffsetInMinutes": 120,
        "rawFormat": "+02:00 Israel Time - Jerusalem, Tel Aviv"
    };
}
// function findTimeZone (): string | undefined{
//     const ind=timeZones.findIndex(tz=>JSON.stringify(tz).includes(cityCountru);
//     return ......
// }