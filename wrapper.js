class FetchWrapper {
    constructor(URL) {
        this.URL = URL
    }

    get(endpoint) {
        return fetch(endpoint, {
            method : "get",
            headers : {
                "Content-Type" : "Application/JSON"
            }
        }).then(response => {
            return  response.json()
        })
    }
}