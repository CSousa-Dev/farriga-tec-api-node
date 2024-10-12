import "reflect-metadata";
import { injectable } from "inversify";
import User from "../../../../Domain/Entities/Account/User";
import UserRepositoryInterface from "../../../../Domain/Repositories/Account/UserRepositoryInterface";

@injectable()
export default class InMemoryUserRepository implements UserRepositoryInterface {
    private users: User[] = [];

    public async save(user: User): Promise<void> {
        this.users.push(user);
    }

    public async findByEmail(email: string): Promise<User | null> {
        return this.users.find(user => user.email === email) || null;
    }
}