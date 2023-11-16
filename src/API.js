import { endpoint } from "./config";

export const fetchData = () => {
    return fetch(endpoint, {
        method: "GET",
        headers: { "content-type": "application/json" },
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.log(error);
        });
};
