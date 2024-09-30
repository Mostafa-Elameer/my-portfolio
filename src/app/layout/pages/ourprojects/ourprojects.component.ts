import { Component, inject } from '@angular/core';
import { ProjectsService } from '../../../sheard/servises/projects.service';
import { Iproject } from '../../../sheard/interFaces/Iproject';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-ourprojects',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './ourprojects.component.html',
  styleUrl: './ourprojects.component.scss'
})
export class OurprojectsComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1000,
    navSpeed: 700,
    items: 1,

  }

  private readonly _ProjectsService = inject(ProjectsService)

  allProject: any[] = []

  ngOnInit(): void {


    this._ProjectsService.getAllProjects().subscribe({
      next: (res) => {
        console.log(res.allProjects)
        this.allProject = res.allProjects
      }

    })
  }
}
