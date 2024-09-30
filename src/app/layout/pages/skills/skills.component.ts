import { Component, inject } from '@angular/core';
import { ProjectsService } from '../../../sheard/servises/projects.service';
import { LinersliderComponent } from "../linerslider/linerslider.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [LinersliderComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  private readonly _ProjectsService = inject(ProjectsService)

  _langImg: any[] = []
  
  ngOnInit(): void {
    this._ProjectsService.getAllProjects().subscribe({
      next: (res) => {
        this._langImg = res.langimg
      }
    })
  }
}
