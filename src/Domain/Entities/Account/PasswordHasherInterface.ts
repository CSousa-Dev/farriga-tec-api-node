import Password from "./Password";

export default interface PasswordHasherInterface {
    hash(password: Password): Promise<string>;
    verify(password: string, hash: string): Promise<boolean>;
}