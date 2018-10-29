import { IUserRepository, UserRepository } from './user.repository';

describe('UserRepository@getAll', ()=>{

    let userRepository: IUserRepository;

    beforeAll(()=>{
        userRepository = new UserRepository();
    });

    it('Should return a list of users', async ()=>{
        const users = await userRepository.getAll(); //TODO find a way to hit a breakpoint here with VSCode IDE
        expect(users.length).toBeGreaterThan(0);
    });
});