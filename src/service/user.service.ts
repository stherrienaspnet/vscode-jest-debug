import { IUserRepository } from '../repository/user.repository';
import { IUser } from '../interface/user.interface';

export interface IUserService {
    getAll(): Promise<Array<IUser>>;
}

export class UserService implements IUserService{
    private readonly _userRepository: IUserRepository;

    constructor(userRepository: IUserRepository){
        this._userRepository = userRepository;
    }

    getAll(): Promise<Array<IUser>>{
        return this._userRepository.getAll();
    }
}