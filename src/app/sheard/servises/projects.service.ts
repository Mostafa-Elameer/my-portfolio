import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import * as projects from './../../../assets/projectData.json'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


  private readonly _HttpClient = inject(HttpClient)


  _projects = projects

  getAllProjects(): Observable<any> {
    return this._HttpClient.get("./../../../assets/projectData.json")
  }

}
