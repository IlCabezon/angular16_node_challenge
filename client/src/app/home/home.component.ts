import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

// services
import { UsersService } from '../users.service';

// interfaces
import { User } from '../userInterface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  usersService: UsersService = inject(UsersService);
  users: User[] = [];
  titles: String[] = ['#', 'gender', 'name', 'email'];

  constructor() {
    this.usersService
      .getUsers()
      .then((res) => (this.users = res))
      .catch((err) => console.log(err));
  }
}
