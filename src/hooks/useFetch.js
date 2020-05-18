import axios from 'axios';
import {useState, useEffect} from 'react';

const useFetch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [options, setOptions] = useState({});
    const [url, setUrl] = useState('');

    const baseUrl = 'https://conduit.productionready.io/api';

    /**
     * @param url
     * @param method
     * @param data
     * @param headers
     */
    const doFetch = (url, method = 'GET', data = null, headers = {}) => {
        data ? setOptions({method, data, headers}) : setOptions({method, headers});
        url ? setUrl(baseUrl + url) : setUrl('');
        setIsLoading(true);
    }

    useEffect(() => {
        if (!isLoading) return;
        if (!url) return;
        axios(url, options)
            .then(result => {
                setIsLoading(false);
                setResponse(result.data)
            })
            .catch(error => {
                setIsLoading(false);
                setError(error.response.data);
            });
    }, [isLoading, url, options])


    return [{response, isLoading, error}, doFetch];
}


export default useFetch;
