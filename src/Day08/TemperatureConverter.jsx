import useConverter from "./customhook";
import "./style.css"
function TemperatureConverter(){
    const [state,dispatch]=useConverter()
    return<div id="main">
    <form action="">
        <div id="Temp">
            <label htmlFor="temp">Temperature</label>
            <input  id="temp" type="number" value={state.temp} onChange={(e)=>dispatch({type:"temp",payload:e.target.value})}/>
        </div>
        <div id="From">
            <label htmlFor="from">From</label>
            <select name="" id="from" value={state.input_type} onChange={(e)=>dispatch({type: "input_type",payload: e.target.value})}>
                <option value="celsius">celsius</option>
                <option value="kelvin">kelvin</option>
                <option value="fahrenheit">Fahrenheit</option>
            </select>
        </div>
        <div>🔁</div>
        <div id="To">
            <label htmlFor="to">To</label>
            <select name="" id="to" value={state.output_type} onChange={(e)=>dispatch({type:"output_type",payload:e.target.value})}>
                <option value="celsius">celsius</option>
                <option value="kelvin">kelvin</option>
                <option value="fahrenheit">Fahrenheit</option>
            </select>
        </div>
    </form>
    <div id="display"><h1>{state.result}</h1></div>
    </div>
}
export default TemperatureConverter;