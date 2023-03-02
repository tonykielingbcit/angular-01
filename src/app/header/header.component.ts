import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Tag } from '../model/tag';
import { Category } from '../model/category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {
  @Input() tagFilter: Tag | undefined;
  @Input() categoryFilter: Category | undefined;
  @Input() mainTitle: String | undefined;
  @Output() newReloadPage = new EventEmitter();

  constructor() {}

  ngOnInit(): void { }

  clearFilters() {
    this.categoryFilter = undefined;
    this.tagFilter = undefined;
    this.newReloadPage.emit();
  }
}
