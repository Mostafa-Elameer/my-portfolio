import { Component } from '@angular/core';
import { CertificatesComponent } from "../certificates/certificates.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CertificatesComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
