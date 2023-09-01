import { useEffect , useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (endpoint) => {                // endpoint ----> Jis URL Pr API call krwanin hai 
    const [data,setData] = useState()

    useEffect(() => {
        makeApiCall()
    },[endpoint])

    const makeApiCall = async () => {
        const res = await fetchDataFromApi(endpoint)
        setData(res);
    }

    return {data};
}

export default useFetch;