import { Account } from '../../models/account'
import {Route, Get, Post} from 'tsoa'
import { User } from '../../models/user'

@Route('auth')
export class AccountsController {

    /** Post user login credentials */
    @Post('login')
    public async login(someFlag: boolean): Promise<Account> {
        return {
            id: 600,
            name: 'test'
        };
    }

    /** Post user signin credentials */
    @Post('signin')
    public async signin(): Promise<User[]> {
        return [
            {
                createdAt: new Date(),
                email: 'test@test.com',
                id: 1
            },
            {
                createdAt: new Date(),
                email: 'test2@test2.com',
                id: 2,
            }
        ];
    }
}
