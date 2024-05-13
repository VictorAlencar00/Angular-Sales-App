import { SupplierService } from './../supplier.service';
import { Supplier } from './../supplier.dto';
import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { Observable, lastValueFrom } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { LoadingBarComponent } from '../../loading-bar/loading-bar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-suppliers-list',
  standalone: true,
  imports: [MaterialModule, AsyncPipe, LoadingBarComponent, RouterLink],
  templateUrl: './suppliers-list.component.html',
  styles: ``,
})
export class SuppliersListComponent {
  suppliers!: Supplier[];
  supplierObservable!: Observable<Supplier[]>;
  constructor(private supplierService: SupplierService) {}

  async ngOnInit() {
    this.supplierObservable = this.supplierService.getAll();
    this.suppliers = await lastValueFrom(this.supplierObservable);
  }
}
