import ChartBar from "./ChartBar"
import "./Chart.css"

function Chart(props){
    const dataPointValues = props.dataPoints.map(index => index.value)
    const totalMax = Math.max(...dataPointValues)
    return (
        <div className="chart">
            {props.dataPoints.map((index) => <ChartBar key={index.label} value={index.value} maxValue={totalMax} label={index.label}/>)}
        </div>
    )

}

export default Chart