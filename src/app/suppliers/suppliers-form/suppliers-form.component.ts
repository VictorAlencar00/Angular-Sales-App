import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Supplier } from '../supplier.dto';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'suppliers-form',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './suppliers-form.component.html',
  styles: ``,
})
export class SuppliersFormComponent implements OnInit {
  @Input({ required: true }) supplier: Supplier;
  @Output() save = new EventEmitter<Supplier>();
  @Output() back = new EventEmitter();

  supplierForm: FormGroup;
  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.supplierForm = this.fb.group({
      id: [this.supplier.id],
      companyName: [
        this.supplier.companyName,
        [Validators.required, Validators.minLength(3)],
      ],
      contactName: [
        this.supplier.contactName,
        [Validators.required, Validators.minLength(3)],
      ],
      contactTitle: [this.supplier.contactTitle],
      address: this.fb.group({
        city: [this.supplier.adress.city],
        country: [this.supplier.adress.country],
        phone: [this.supplier.adress.phone],
        postalCode: [this.supplier.adress.postalCode],
        region: [this.supplier.adress.region],
        street: [this.supplier.adress.street],
      }),
    });
  }

  onSubmit() {
    this.save.emit(this.supplierForm.value as Supplier);
  }

  onBack(event: { preventDefault: () => void }) {
    event.preventDefault();
    this.back.emit();
  }
}
