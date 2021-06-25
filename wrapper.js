class FetchWrapper {
    constructor(BaseURL) {
        this.BaseURL = BaseURL
    }

    get(endpoint) {
        return fetch( this.BaseURL + endpoint, {
            method : "get", //This method is the default method for sending request.
            headers : {
                "Content-Type" : "Application/JSON" // headers content type.
            }
        }).then(response => {
            return  response.json()
        })
    }

    put(endpoint, content) {
        return fetch(this.BaseURL + endpoint, {
            method : 'put', 
            headers : {
                "Content-Type" : "Application/JSON"
            },
            body : JSON.stringify(content)
        })
        .then(response => {
            return response.json()
        })
    }
}