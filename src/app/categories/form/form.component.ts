import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { Category } from '../category.dto'

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
export class CategoryFormComponent{
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  categoryForm = this.fb.group({
    id: [null],
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', Validators.required],
  });

  @Output() save = new EventEmitter<Category>();

  onSubmit() {
    this.save.emit(this.categoryForm.value as Category)
  }

  @Output() back = new EventEmitter();

  onBack() {
    this.back.emit()
  }

}
