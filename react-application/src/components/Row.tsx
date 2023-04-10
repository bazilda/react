import { CSSProperties } from 'react'
type Props = {
    row: number[]
}
export const Row: React.FC<Props> = ({row}) => {
  function getSize() :number {
        return Math.min(window.innerWidth, window.innerHeight) / row.length - 2 
    }

    function getStyle(cellValue: number): CSSProperties {
        const size = getSize();
        return {width: size, height: size,
             backgroundColor: cellValue ? "black":"white",
             border: "solid 1px gray"}
    }
    
    function getDivs() {
        return row.map((value, index) =>
         <div style={getStyle(value)} key={index}></div>)
    }

    return <div style = {{display: 'flex', flexDirection: 'row'}}>
        {getDivs()}
    </div>
}