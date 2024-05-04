import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'category-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
  ],
  templateUrl: './form.component.html',
  styles: ``,
})
export class CategoryFormComponent {
  constructor(private fb: FormBuilder) {}
  categoryForm = this.fb.group({
    id: [null],
    name: ['', Validators.required],
    description: ['', Validators.required],
  });
}
