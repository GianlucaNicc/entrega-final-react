import { useState } from "react";

const useCount = (initalState = 0) => {
    const [counter, setCount] = useState(initalState);

const increment = () => {
        setCount(counter + 1);
    }
    const decrement = () => {
        setCount(counter - 1);
    }
    const addTochart = () => {
        console.log(`Cantidad agregada`, counter);
    };

    return { counter, increment, decrement, addTochart };
}

export default useCount;