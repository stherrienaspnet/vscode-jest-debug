import { IUser } from '../interface/user.interface';

export interface IUserRepository {
    getAll(): Promise<Array<IUser>>;
}

export class UserRepository implements IUserRepository {
    private _userList: Array<IUser>;

    constructor() {
        this._userList = [
            { firstName: 'Bob', lastName: 'Marley', age: 43 },
            { firstName: 'Patrick', lastName: 'Roy', age: 44 },
        ];
    }

    async getAll(): Promise<Array<IUser>> {
        console.log('UserRepository.getAll called');
        let users = await this._userList;
    
        return users;
    }
}