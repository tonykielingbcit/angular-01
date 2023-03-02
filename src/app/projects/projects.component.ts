import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../model/project';
import { Category } from '../model/category';
import { Tag } from '../model/tag';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  @Input() categoryFilter: Category | undefined;
  @Output() newCategoryFilterEvent = new EventEmitter<Category>();
  @Input() tagFilter: Tag | undefined;
  @Output() newTagFilterEvent = new EventEmitter<Tag>();

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {}

  projects: Project[] = [];
  getProjects(): void {
    // this.projects = this.projectService.getProjects();
    this.projectService
      .getProjects()
      .subscribe((projects) => (this.projects = projects));
  }

  setCategoryFilter(category: Category) {
    this.categoryFilter = category;
    this.newCategoryFilterEvent.emit(category);
  }

  setTagFilter(tag: Tag) {
    this.tagFilter = tag;
    this.newTagFilterEvent.emit(tag);
  }

  clearFilters() {
    this.categoryFilter = undefined;
    this.tagFilter = undefined;
  }

  selectedProject?: Project;
  onSelect(project: Project): void {
    this.selectedProject = project;
  }
  clearSelectedProject(): void {
    this.selectedProject = undefined;
  }

  getProjectsByCategory(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projectService
      .getProjectsByCategory(id)
      .subscribe((projects) => (this.projects = projects));
  }

  getProjectsByTag(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projectService
      .getProjectsByTag(id)
      .subscribe((projects) => (this.projects = projects));
  }

  deleteCategoryFilters() {
    this.categoryFilter = undefined;
  }
  deleteTagFilters() {
    this.tagFilter = undefined;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const segment: string = this.route.snapshot.url[1]?.path;
      if (segment === 'categories') {
        this.getProjectsByCategory();
      } else if (segment === 'tags') {
        this.getProjectsByTag();
      } else {
        this.getProjects();
      }
    });
  }
}