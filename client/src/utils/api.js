import axios from "axios";


const params = {
    headers: {
        Authorization: "Bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
        // Authorization: "Bearer " + token,
    },
};


export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(
            process.env.REACT_APP_DEV_URL + url,
            params
        );
        return data;
        // console.log(data);
        // console.log(process.env.REACT_APP_DEV_URL + url,params);
    } catch (err) {
        console.log(err);
        return err;
    }
};

export const makePaymentRequest = axios.create({
    baseURL:process.env.REACT_APP_DEV_URL,
    headers: {
        Authorization: "Bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
        // Authorization: "Bearer " + token,
    }
})
