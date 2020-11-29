import React, {useState,useEffect} from 'react' 
import axios from 'axios'

export function useAxiosGet(url){
    const  [request, setRequest] = useState({
        loading: true,
        data: null,
        error: false
    });

    useEffect(() => {
        axios.get(url)
        .then(response => {
            setRequest({
                loading: false,
                data: response.data,
                error: false
            })
        }).catch(() => {
           setRequest( {
                loading: false,
                data:null,
                error: true
           })
            })
    }, [url])

    return request
}
