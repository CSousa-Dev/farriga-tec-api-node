export default class UserAlreadyHasPasswordError extends Error {
    constructor() {
        super("User already has a password");
        this.name = "UserAlreadyHasPasswordError";
    }
}