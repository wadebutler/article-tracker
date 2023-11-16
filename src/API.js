import { endpoint } from "./config";

export const fetchData = (page) => {
    let url = new URL(endpoint);
    url.searchParams.append("page", page);
    url.searchParams.append("limit", 10);

    return fetch(url, {
        method: "GET",
        headers: { "content-type": "application/json" },
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            let tempObj = {
                page: page,
                data: data,
            };

            return tempObj;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const deleteData = (id) => {
    let url = `${endpoint}/${id}`;
    fetch(url, {
        method: "DELETE",
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .catch((error) => {
            console.log(error);
        });
};
