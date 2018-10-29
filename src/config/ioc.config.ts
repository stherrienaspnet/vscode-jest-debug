import {Container} from "inversify";
import { IUserService, UserService } from '../service/user.service';
import { IUserRepository, UserRepository } from '../repository/user.repository';
import { eIOCType } from '../constant/ioc-type.enum';
const container = new Container();

container.bind<IUserService>(eIOCType.IUserService).to(UserService);
container.bind<IUserRepository>(eIOCType.IUserRepository).to(UserRepository);