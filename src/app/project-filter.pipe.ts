import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './model/project';
import { Tag } from './model/tag';


@Pipe({
  name: 'projectFilter',
})
export class ProjectFilterPipe implements PipeTransform {
  // The transform method will receive our array of Projects and return only those that contain our Tag if defined
  transform(projects: Project[], tag: Tag | undefined): Project[] {
    let filteredProjects = [];
    if (tag) {
      filteredProjects = projects.filter((project) => {
        // Convert the project tags as well as the tag to strings
        // Since indexOf returns -1 if not found, add 1 to make not found a falsy value
        return JSON.stringify(project.tags).indexOf(JSON.stringify(tag)) + 1;
        // it compares character by character
        // if not found, the result of indexOf is gonna be -1, so +1 is added
        // if it is found, the result is 1 + 1 (any truthy value is okay) 
      });
    } else {
      filteredProjects = projects;
    }
    return filteredProjects;
  }
}