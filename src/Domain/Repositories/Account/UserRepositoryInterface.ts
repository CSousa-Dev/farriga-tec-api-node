import User from "../../Entities/Account/User";

export default interface UserRepositoryInterface {
    save(user: User): Promise<void>;
    findByEmail(email: string): Promise<User | null>;
    getOnlyConnectedUsers(usersIds: string[]): Promise<User[]>;
}