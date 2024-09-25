export default class UnableToChangePasswordError extends Error {
    constructor(because: string) {
        super("Unable to change password - " + because);
        this.name = "UnableToChangePasswordError";
    }
}