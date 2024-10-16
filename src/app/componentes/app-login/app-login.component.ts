import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-app-login',
  standalone: true,
  imports: [MatDividerModule, RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './app-login.component.html',
  styleUrl: './app-login.component.css'
})
export class AppLoginComponent {
}
