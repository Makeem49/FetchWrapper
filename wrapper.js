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
        return this.#send('put', endpoint, content)
    }

    post(endpoint, content) {
        return this.#send('post', endpoint, content)
    }

    delete(endpoint, content) {
        return this.#send('delete', endpoint, content)
    }

    #send(method,endpoint, content) {
        return fetch(this.BaseURL + endpoint, {
            method : method 
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
