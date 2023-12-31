import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    name: string;
    email: string;
}

class CreateUserUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ email, name }: IRequest): User {
        const user = { name, email };

        const emailAlreadyExists = this.usersRepository.findByEmail(email);

        if (emailAlreadyExists) {
            throw new Error("Email already exists!");
        }

        return this.usersRepository.create(user);
    }
}

export { CreateUserUseCase };
