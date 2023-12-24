import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { PopularComponent } from './home/popular/popular.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthGuardService } from './Guards/AuthGuard.service';
import { CourseService } from './Services/course.service';
import { ResolveCourses } from './Guards/AuthGuard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  {
    path: 'Contact',
    component: ContactComponent,
    canDeactivate: [AuthGuardService],
  },
  {
    path: 'Courses',
    component: CoursesComponent,
    // resolve: { courses: AuthGuardService },
    // resolve: { courses: () => inject(CourseService).getAllcourses() },
    resolve: { courses: ResolveCourses },
  },
  {
    path: 'Courses',
    // canActivate: [CanActivate],
    // canActivateChild: [AuthGuardService],
    // canActivateChild: [CanActivateChild],
    children: [
      { path: 'Course/:Id', component: CourseDetailComponent },
      { path: 'popular', component: PopularComponent },
      {
        path: 'CheckOut',
        component: CheckoutComponent,
        // canActivate: [CanActivate],
        // canActivate: [AuthGuardService],
      },
    ],
  },
  // { path: 'Courses/Course/:Id', component: CourseDetailComponent },
  { path: 'LogIn', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
