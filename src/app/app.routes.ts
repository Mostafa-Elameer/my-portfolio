import { Routes } from '@angular/router';
import { HomeComponent } from './layout/pages/home/home.component';
import { AboutComponent } from './layout/pages/about/about.component';
import { SkillsComponent } from './layout/pages/skills/skills.component';
import { ContactUsComponent } from './layout/pages/contact-us/contact-us.component';
import { OurprojectsComponent } from './layout/pages/ourprojects/ourprojects.component';

export const routes: Routes = [
    { path: '', redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "skills", component: SkillsComponent },
    { path: "ourprojects", component: OurprojectsComponent },
    { path: "contact-us", component: ContactUsComponent },
    { path: "**", component: HomeComponent }
];
