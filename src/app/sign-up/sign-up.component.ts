import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  user: User = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",

  }

  onSubmit() {
    console.log(this.user)
  }

}

interface User {
  email: string,
  firstName: string,
  lastName: string,
  password: string,

}