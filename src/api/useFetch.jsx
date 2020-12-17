import {useState, useEffect} from 'react';
import axios from 'axios';

// const baseUrl = 'https://24rolls.retailcrm.ru/app/api/';

export default (url) => {
    const baseUrl = 'http://localhost:3000/products/category/';
    const [isLoading, setIsLoading] = useState(true);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [resOption, setResOption] = useState({method: "GET"})
    const doFetch = (options) => {
        setResOption(options)
    }
    useEffect(() => {
        if(!isLoading){
            setIsLoading(true)
        }
        axios(baseUrl + url, resOption)
            .then(res => {
                setResponse(res.data)
            })
            .catch(err => setError(err))
            .finally(() => {
                setIsLoading(false)
            })
    }, [resOption])
    return [response, error, isLoading]
}
