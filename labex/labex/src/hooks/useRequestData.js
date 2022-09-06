import { useState, useEffect } from "react";
import { BASE_URL, API_CLIENT } from '../constants/urls';
import axios from "axios";


const useRequestData = (path, initialState) => {
    const [data, setData] = useState(initialState);

    const getData = () => {
        const header = {
            headers: {
                auth: localStorage.getItem("token")
            }
        };

        axios.get(`${BASE_URL}/${API_CLIENT}/${path}`, header)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    useEffect(() => {
        getData();
    }, [path]);

    return [data, getData];
};

export default useRequestData;