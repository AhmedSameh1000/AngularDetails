import { inject } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
import { CourseService } from '../Services/course.service';

export const CanActivate = () => {
  let authService = inject(AuthService);
  let router = inject(Router);

  if (authService.IAuthenticated()) {
    return true;
  } else {
    router.navigate(['LogIn']);
    return false;
  }
};
export const CanActivateChild = () => {
  return CanActivate();
};
export const ResolveCourses = () => {
  return inject(CourseService).getAllcourses();
};
