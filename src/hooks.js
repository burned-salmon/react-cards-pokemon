import { useEffect, useState } from "react";
import axios from "axios";

function useToggle(initialVal = false) {
    // call useState, "reserve piece of state"
    const [value, setValue] = useState(initialVal);
    const toggle = () => {
        setValue(oldValue => !oldValue);
    };

    // return piece of state AND a function to toggle it
    return [value, toggle];
}

function useAxios(url) {
    const [responses, setResponses] = useState([]);

    const addResponseData = async (formatter = data => data, restOfUrl = "") => {
        const response = await axios.get(`${url}${restOfUrl}`);
        setResponses(data => [...data, formatter(response.data)]);
    };

    return [responses, addResponseData];
}

export { useToggle, useAxios };