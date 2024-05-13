import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable, lastValueFrom } from 'rxjs';
import { SupplierService } from '../supplier.service';
import { Supplier } from '../supplier.dto';
import { AsyncPipe } from '@angular/common';

import { MaterialModule } from '../../material.module';
import { LoadingBarComponent } from '../../loading-bar/loading-bar.component';
import { SuppliersFormComponent } from '../suppliers-form/suppliers-form.component';

@Component({
  selector: 'app-suppliers-edit',
  standalone: true,
  imports: [
    MaterialModule,
    AsyncPipe,
    LoadingBarComponent,
    RouterLink,
    SuppliersFormComponent,
  ],
  templateUrl: './suppliers-edit.component.html',
  styles: ``,
})
export class SuppliersEditComponent {
  route = inject(ActivatedRoute);
  supplierService = inject(SupplierService);
  router = inject(Router);

  supplier: Supplier;
  supplierObservable: Observable<Supplier>;
  async ngOnInit() {
    const id: Number = +(this.route.snapshot.paramMap.get('id') || 0);
    this.supplierObservable = this.supplierService.getById(id);
    this.supplier = await lastValueFrom(this.supplierObservable);
  }
  async onSave(supplier: Supplier) {
    this.supplierObservable = this.supplierService.save(supplier);
    this.supplier = await lastValueFrom(this.supplierObservable);
    this.router.navigate(['/suppliers/show/', supplier?.id]);
  }
  onBack() {
    this.router.navigate(['/suppliers']);
  }
}
