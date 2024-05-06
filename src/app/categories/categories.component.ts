import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {
  MatTableModule,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { lastValueFrom } from 'rxjs';
import { MatButton } from '@angular/material/button';

import { CategoriesDataSource, CategoriesItem } from './categories-datasource';
import { Category } from './category.dto';
import { CategoryService } from './category.service';
import { CategoryFormComponent } from './form/form.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: `
    .full-width-table {
      width: 100%;
    }
  `,
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    CategoryFormComponent,
    MatButton
  ],
})
export class CategoriesComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<CategoriesItem>;
  dataSource = new MatTableDataSource<Category>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'description', 'actions'];

  showForm: boolean = false;

  onEditCategoryClick(category: Category) {
    console.log('edit category', category)
  }

  constructor(private categoryService: CategoryService) {}

  ngAfterViewInit(): void {
    this.loadCategories();
  }

  async loadCategories(): Promise<void> {
    const categories = await lastValueFrom(this.categoryService.getAll());
    this.dataSource = new MatTableDataSource(categories);
    this.table.dataSource = this.dataSource;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onNewCategoryClick() {
    this.showForm = true;
  }

  hideCategoryForm() {
    this.showForm = false
    this.loadCategories()
  }

  async onSave(category: Category) {
    const saved = lastValueFrom(this.categoryService.save(category))
    console.log('Saved', saved)
    this.hideCategoryForm()
    }
}
