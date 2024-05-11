import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatProgressBar,
  MatProgressBarModule,
} from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatList, MatListItem, MatNavList } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatPaginator,
    MatSort,
    MatTable,
    MatProgressBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatNavList,
    MatProgressBar,
    MatMenuModule,
    MatGridListModule,
    MatListItem,
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatPaginator,
    MatSort,
    MatTable,
    MatSidenavModule,
    MatToolbarModule,
    MatNavList,
    MatProgressBar,
    MatMenuModule,
    MatGridListModule,
    MatListItem,
  ],
})
export class MaterialModule {}
