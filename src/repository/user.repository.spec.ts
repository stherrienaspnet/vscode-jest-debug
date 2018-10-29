import { IUserRepository, UserRepository } from './user.repository';

describe('UserRepository', ()=>{

    let userRepository: IUserRepository;

    beforeAll(()=>{
        userRepository = new UserRepository();
    });

    it('Should getAll return a list of users', async ()=>{
        const users = await userRepository.getAll();
        expect(users.length).toBeGreaterThan(0);
    });
});