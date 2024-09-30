import { Component } from '@angular/core';
import { OurprojectsComponent } from "../ourprojects/ourprojects.component";
import { AboutComponent } from "../about/about.component";
import { FooterComponent } from "../../additions/footer/footer.component";
import { CertificatesComponent } from "../certificates/certificates.component";
import { SkillsComponent } from "../skills/skills.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OurprojectsComponent, AboutComponent, FooterComponent, CertificatesComponent, SkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
