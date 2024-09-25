import bcrypt from 'bcrypt';
import Password from "../Domain/Entities/Account/Password";
import PasswordHasherInterface from "../Domain/Entities/Account/PasswordHasherInterface";
import { injectable } from 'inversify';

@injectable()
export default class BcryptPasswordHasher implements PasswordHasherInterface {
    async hash(password: Password): Promise<string> {
        const saltRounds = 10;
        const hashedPassword = bcrypt.hash(password.value, saltRounds);
        return hashedPassword;
    }

    async verify(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash);
    }
}