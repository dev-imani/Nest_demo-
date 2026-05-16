import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'anson', email: 'anson@anson.com' },
    { username: 'corey', email: 'corey@corey.com' },
    {
      username: 'greg', email: 'greg@greg.com'

    }
  ];
  fetchUsers() {
    return this.fakeUsers;
  }
  createUser(userData: { username: string; email: string }) {
    this.fakeUsers.push(userData);
    return;
  }
  fetchUserById(id: number) {
    return null;
  }
}
