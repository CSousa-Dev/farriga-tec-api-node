import "reflect-metadata";
import { inject, injectable } from "inversify";
import Password from "../../Entities/Account/Password";
import PasswordHasherInterface from "../../Entities/Account/PasswordHasherInterface";
import User from "../../Entities/Account/User";
import UserAlreadyExistsError from "../../Errors/Account/UserAlreadyExistsError";
import { repositoryTypes } from "../../../Types/repositoryTypes";
import { infraTypes } from "../../../Types/infraTypes";
import UserRepositoryInterface from "../../Repositories/Account/UserRepositoryInterface";

@injectable()
export default class RegisterUserService {
    constructor(
        @inject(repositoryTypes.UserRepositoryInterface)
        private readonly userRepository: UserRepositoryInterface,
        @inject(infraTypes.PasswordHasherInterface)
        private readonly passwordHasher: PasswordHasherInterface
    ) {}

    async execute(user: User, password: Password): Promise<void> {
        const hashedPassword = await this.passwordHasher.hash(password);

        if(await this.userRepository.findByEmail(user.email))
            throw new UserAlreadyExistsError(user.email);

        user.addHashedPassword(hashedPassword);
        await this.userRepository.save(user);
    }
}