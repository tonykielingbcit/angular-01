import { Component } from '@angular/core';
import { Category } from './model/category';
import { Tag } from './model/tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'TK - Angular assign-01';
  date = new Date();
  author = "";

  tagFilter: Tag | undefined;
  setTagFilter(tag: Tag) {
    this.tagFilter = tag;
  }
  deleteTagFilters() {
    this.tagFilter = undefined;
  }

  categoryFilter: Category | undefined;
  setCategoryFilter(category: Category) {
    this.categoryFilter = category;
  }
  deleteCategoryFilters() {
    this.categoryFilter = undefined;
  }

  clearFilters() {
    this.categoryFilter = undefined;
    this.tagFilter = undefined;
  }

  reloadPage() {
    // window.location.reload();
    this.categoryFilter = undefined;
    this.tagFilter = undefined;
  }
}
