import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {
  MatTableModule,
  MatTable,
  MatTableDataSource,
} from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { lastValueFrom } from 'rxjs';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { CategoriesDataSource, CategoriesItem } from './categories-datasource';
import { Category } from './category.dto';
import { CategoryService } from './category.service';
import { CategoryFormComponent } from './form/form.component';
import { LoadingBarComponent } from '../loading-bar/loading-bar.component';

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
    MatButton,
    MatIcon,
    LoadingBarComponent,
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
  showLoading: boolean = false;

  category!: Category;

  constructor(private categoryService: CategoryService) {}

  ngAfterViewInit(): void {
    this.loadCategories();
  }

  async loadCategories(): Promise<void> {
    this.showLoading = true;
    const categories = await lastValueFrom(this.categoryService.getAll());
    this.dataSource = new MatTableDataSource(categories);
    this.table.dataSource = this.dataSource;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.showLoading = false;
  }

  onNewCategoryClick() {
    this.showForm = true;
  }

  async onSave(category: Category) {
    const saved = lastValueFrom(this.categoryService.save(category));
    console.log('Saved', saved);
    this.hideCategoryForm();
    this.loadCategories();
  }

  hideCategoryForm() {
    this.showForm = false;
    this.loadCategories();
  }

  onEditCategoryClick(category: Category) {
    this.category = category;
    this.showForm = true;
  }

  async onDeleteCategoryClick(category: Category) {
    console.log('delete category', category);
    if (confirm(`Delete "${category.name}" with id ${category.id} ?`)) {
      this.showLoading = true;
      await lastValueFrom(this.categoryService.delete(category.id));
      this.showLoading = false;
      this.loadCategories();
    }
  }
}
