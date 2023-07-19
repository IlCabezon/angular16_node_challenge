import { Injectable } from '@angular/core';

// env
import { environment } from 'environment/environment';

// interfaces
import { User } from './userInterface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  async getUsers(): Promise<User[]> {
    const response = await fetch(`${environment.serverUrl}/users`);
    const users = await response.json();

    return users.results ?? [];
  }
}
