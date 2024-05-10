import {
  Component,
  EventEmitter,
  Output,
  Input,
  AfterViewInit,
} from '@angular/core';
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
export class CategoryFormComponent implements AfterViewInit {
  constructor(private fb: FormBuilder) {}
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
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
