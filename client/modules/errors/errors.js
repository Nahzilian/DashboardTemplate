export class Error {
    constructor(message, level) {
        this.message = message
        this.level = level
    }
}


export class ServerError extends Error{
    constructor(message, code) {
        super(message, 'server')
        this.code = code
    }    
}

export class NotFoundEArror extends ServerError {
    constructor() {
        super('Item not found, please try again', 404)
    }
}

export class BadRequestError extends ServerError {
    constructor() {
        super('Bad input, please try a different one', 400)
    }
}


export class ServerInternalError extends ServerError {
    constructor() {
        super('Something went wrong with our server, please try again later', 500)
    }
}

