import Password from "../../../src/Domain/Entities/Account/Password";
import User from "../../../src/Domain/Entities/Account/User";
import DomainServiceProvider from "../../../src/Providers/DomainServiceProvider";
import RepositoryProvider from "../../../src/Providers/RepositoryProvider";

describe('RegisterUserService', () => {
    test('should register a user', async () => {
        
        const password = new Password('123456');
        const user = new User({
            email: '',
            name: '',
        })
        const userRepository = new RepositoryProvider().userRepository();
        const registerUserService = new DomainServiceProvider().registerUserService();

        await registerUserService.execute(user, password);

        const registeredUser = await userRepository.findByEmail(user.email);

        expect(registeredUser).toEqual(user);
    })
})