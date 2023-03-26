import React, { useEffect, useState, useRef } from "react"
import { json } from "stream/consumers";
import timeZones from "../time-zones";
import { Input } from "./Input";
type Props = {
    cityCountry: string;
}
export const Timer: React.FC<Props> = ({ cityCountry }) => {
    const styles: React.CSSProperties = { backgroundColor: "black", color: "white", fontSize: "2em" };

    const [time, setTime] = useState<Date>(new Date());
    const timeZone = useRef<string | undefined>();
    const [inputCityCountry, setCityCountry] = useState<string>(cityCountry);
    function tic() {
        setTime(new Date());
    }
    useEffect(
        () => {
            timeZone.current = findTimeZoneName(cityCountry);
        }, [cityCountry]
    )
    useEffect(() => {
        const tickInterval = setInterval(tic, 1000);
        return () =>
            clearInterval(tickInterval);

    }, []);

    function findTimeZoneName(cityName: string): string | undefined {
        const ind = timeZones.findIndex(tz => JSON.stringify(tz).includes(cityName));
        if (ind < 0)
            return undefined;
        return timeZones[ind].name;
    }

    function findeNewTZ(inputValue: string): string {
        const tmpZone = findTimeZoneName(inputValue);
        let res: string = '';
        if (tmpZone == undefined) {
            res = `${inputValue} doesn't exist in the TZ this is why you had the Israels TZ`;
            inputValue = "Israel now";
        }

        timeZone.current = tmpZone;
        setCityCountry(inputValue);

        return res;
    }

    return <div>
        <Input findeNewTZ={findeNewTZ} placeHolder={"Enter any City/Country"} />
        <h2 >Current Time in {inputCityCountry}</h2>
        <p style={styles}>{time.toLocaleTimeString(undefined, { timeZone: timeZone.current })}</p>
    </div>
}



