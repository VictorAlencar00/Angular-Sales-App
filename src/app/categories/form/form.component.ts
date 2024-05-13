import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { Category } from '../category.dto';

@Component({
  selector: 'category-form',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule],
  templateUrl: './form.component.html',
  styles: ``,
})
export class CategoryFormComponent {
  constructor(private fb: FormBuilder) {}

  categoryForm = this.fb.group({
    id: [null],
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', Validators.required],
  });

  @Output() save = new EventEmitter<Category>();

  onSubmit() {
    this.save.emit(this.categoryForm.value as Category);
  }

  @Output() back = new EventEmitter();

  onBack() {
    this.back.emit();
  }

  @Input()
  set category(category: Category) {
    this.categoryForm.setValue(category);
  }
}
