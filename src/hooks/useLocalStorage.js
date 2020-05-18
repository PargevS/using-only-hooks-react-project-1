import {useState, useEffect} from 'react';

const useLocalStorage = (key ) => {
    const [value, setValue] = useState(() => {
        return localStorage.getItem(key) || null;
    });

    useEffect(() => {
        if(value !== null) localStorage.setItem(key, value);
    }, [value])

    return [value, setValue];
}


export default useLocalStorage;
