import AuthenticationError from "../../Errors/Account/AuthenticationError";
import UnableToChangePasswordError from "../../Errors/Account/UnableToChangePasswordError";
import UserAlreadyHasPasswordError from "../../Errors/Account/UserAlreadyHasPasswordError";
import PasswordHasherInterface from "./PasswordHasherInterface";

type UserData = {
    name: string,
    email: string,
    hashedPassword?: string
    isLogged?: boolean  
}

export default class User {
    public readonly name: string;
    public readonly email: string;
    private hashedPassword: string | undefined;
    private isLogged: boolean | undefined;

    constructor(userData: UserData){ 
        this.name = userData.name;
        this.email = userData.email;
        this.hashedPassword = userData.hashedPassword;
        this.isLogged = userData.isLogged;
    }

    addHashedPassword(hashedPassword: string): void {
        if(this.hashedPassword) 
            throw new UserAlreadyHasPasswordError();
    
        this.hashedPassword = hashedPassword;
    }

    changePassword(hashedPassword: string): void {
        if(!this.hashedPassword)
            throw new UnableToChangePasswordError(
                "User does not have a password"
            );
        
        if(!this.isLogged)
            throw new UnableToChangePasswordError(
                "User is not logged in"
            );
        
        this.hashedPassword = hashedPassword;
    }

    getHashedPassword(): string | undefined {
        return this.hashedPassword;
    }

    async performLogin(passwordHasher: PasswordHasherInterface, visiblePassword: string): Promise<void> {
        if(!await passwordHasher.verify(visiblePassword, this.hashedPassword || ""))
            throw new AuthenticationError();

        this.isLogged = true;
    }

    performLogout(): void {
        this.isLogged = false;
    }
}