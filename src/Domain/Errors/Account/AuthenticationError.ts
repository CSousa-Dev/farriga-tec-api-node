export default class AuthenticationError extends Error {  
    constructor() {
        super("Sorry, we couldn't authenticate you");
        this.name = "AuthenticationError";
    }
}