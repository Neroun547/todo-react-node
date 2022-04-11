import { IsNotEmpty } from 'class-validator';
import { ILogin } from '../interfaces/login.interface';

export class LoginDto implements ILogin {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}