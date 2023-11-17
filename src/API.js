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
        headers: { "content-type": "application/json" },
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

export const addData = (data) => {
    fetch(endpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
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

export const updateData = (id, data) => {
    let url = `${endpoint}/${id}`;
    fetch(url, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
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
