import * as TypeMoq from "typemoq";
import { IUserRepository } from '../repository/user.repository';
import { IUserService, UserService } from './user.service';
import { IUser } from '../interface/user.interface';

describe('UserService', () => {

    const userList: Array<IUser> = [
        { firstName: 'Bob', lastName: 'Marley', age: 43 },
        { firstName: 'Patrick', lastName: 'Roy', age: 44 },
    ];

    let repositoryMock: TypeMoq.IMock<IUserRepository>;

    beforeAll(() => {
        repositoryMock = TypeMoq.Mock.ofType<IUserRepository>();
        repositoryMock.setup(x => x.getAll()).returns(async () => userList).verifiable();
    });

    it('Shoud getAll call the expected repository method', async () => {
        let userService: IUserService = new UserService(repositoryMock.object);
        const users = await userService.getAll();
        
        expect(users.length).toBeGreaterThan(0);
        repositoryMock.verifyAll();
    });

});