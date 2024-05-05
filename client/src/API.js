export default class API {
    constructor() {
        this.baseURL = window.location.origin;
    }

    get(endpoint) {
        return fetch(this.baseURL + endpoint)
            .then(response => response.json())
            .catch(error => console.error('Error:', error));
    }

    patch(endpoint, data) {
        return fetch(this.baseURL + endpoint, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .catch(error => console.error('Error:', error));
    }
}