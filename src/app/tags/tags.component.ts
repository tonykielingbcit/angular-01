import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TagService } from '../tag.service';
import { Tag } from '../model/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})

export class TagsComponent {
  @Input() tagFilter: Tag | undefined;
  @Output() newTagFilterEvent = new EventEmitter<Tag>();

  constructor(private tagService: TagService) {}

  tags: Tag[] = [];
  getTags(): void {
    this.tags = this.tagService.getTags();
  }
  
  // ngOnInit(): void {
  //   this.getTags();
  // }

  thinScreen: Boolean = true;
  ngOnInit(): void {
    this.getTags();
    if (window.innerWidth > 800)
      this.thinScreen = false;
  }

  setTagFilter(tag: Tag) {
    // console.log("SETTAGFILTER: ", tag)
    this.tagFilter = tag;
    this.newTagFilterEvent.emit(tag);
  }
}
