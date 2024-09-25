import { ContainerModule } from "inversify";
import BcryptPasswordHasher from "../../Infra/BcryptPasswordHasher";
import { infraTypes } from "../../Types/infraTypes";
import sharedContainer from "./sharedContainer";

const infraModule = new ContainerModule((bind) => {
    // Account Services
    bind(infraTypes.PasswordHasherInterface).to(BcryptPasswordHasher).inSingletonScope();
});

sharedContainer.load(infraModule);