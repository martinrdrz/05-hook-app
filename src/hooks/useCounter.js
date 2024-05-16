import { useState } from 'react';

export const useCouter = (initialValue) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = (value = 1) => {
        setCounter(counter + value);
    };

    const decrement = () => {
        setCounter(counter - 1);
    };

    const reset = () => {
        setCounter(initialValue);
    };

    return { counter, increment, decrement, reset };
};
