import { useReducer } from "react";

function useConverter() {

    const initialState = {
        temp: 0,
        input_type: "celsius",
        output_type: "fahrenheit",
        result: 32
    };

    function reducer(state, action) {

        // Temperature changed
        if (action.type === "temp") {
            const temp = Number(action.payload);

            let result = temp;

            if (state.input_type === "celsius" && state.output_type === "fahrenheit") {
                result = (temp * 9 / 5) + 32;
            }
            else if (state.input_type === "celsius" && state.output_type === "kelvin") {
                result = temp + 273.15;
            }
            else if (state.input_type === "fahrenheit" && state.output_type === "celsius") {
                result = (temp - 32) * 5 / 9;
            }
            else if (state.input_type === "fahrenheit" && state.output_type === "kelvin") {
                result = (temp - 32) * 5 / 9 + 273.15;
            }
            else if (state.input_type === "kelvin" && state.output_type === "celsius") {
                result = temp - 273.15;
            }
            else if (state.input_type === "kelvin" && state.output_type === "fahrenheit") {
                result = (temp - 273.15) * 9 / 5 + 32;
            }

            return {
                ...state,
                temp: action.payload,
                result: result
            };
        }

        // From unit changed
        if (action.type === "input_type") {

            let result = Number(state.temp);

            if (action.payload === "celsius" && state.output_type === "fahrenheit") {
                result = (state.temp * 9 / 5) + 32;
            }
            else if (action.payload === "celsius" && state.output_type === "kelvin") {
                result = Number(state.temp) + 273.15;
            }
            else if (action.payload === "fahrenheit" && state.output_type === "celsius") {
                result = (state.temp - 32) * 5 / 9;
            }
            else if (action.payload === "fahrenheit" && state.output_type === "kelvin") {
                result = (state.temp - 32) * 5 / 9 + 273.15;
            }
            else if (action.payload === "kelvin" && state.output_type === "celsius") {
                result = state.temp - 273.15;
            }
            else if (action.payload === "kelvin" && state.output_type === "fahrenheit") {
                result = (state.temp - 273.15) * 9 / 5 + 32;
            }

            return {
                ...state,
                input_type: action.payload,
                result: result
            };
        }
        if (action.type === "output_type") {

            let result = Number(state.temp);

            if (state.input_type === "celsius" && action.payload === "fahrenheit") {
                result = (state.temp * 9 / 5) + 32;
            }
            else if (state.input_type === "celsius" && action.payload === "kelvin") {
                result = Number(state.temp) + 273.15;
            }
            else if (state.input_type === "fahrenheit" && action.payload === "celsius") {
                result = (state.temp - 32) * 5 / 9;
            }
            else if (state.input_type === "fahrenheit" && action.payload === "kelvin") {
                result = (state.temp - 32) * 5 / 9 + 273.15;
            }
            else if (state.input_type === "kelvin" && action.payload === "celsius") {
                result = state.temp - 273.15;
            }
            else if (state.input_type === "kelvin" && action.payload === "fahrenheit") {
                result = (state.temp - 273.15) * 9 / 5 + 32;
            }

            return {
                ...state,
                output_type: action.payload,
                result: result
            };
        }

        return state;
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return [state, dispatch];
}

export default useConverter;
