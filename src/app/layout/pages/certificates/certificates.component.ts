import { Component, inject } from '@angular/core';
import { LinersliderComponent } from "../linerslider/linerslider.component";
import { ProjectsService } from '../../../sheard/servises/projects.service';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [LinersliderComponent],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss'
})
export class CertificatesComponent {


  private readonly _ProjectsService = inject(ProjectsService)

  _certificates: any[] = []


  ngOnInit(): void {
    this._ProjectsService.getAllProjects().subscribe({
      next: (res) => {
        this._certificates = res.certificates
      }
    })

  }





}
