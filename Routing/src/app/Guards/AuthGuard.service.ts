import { CourseService } from 'src/app/Services/course.service';
import { AuthService } from './../Services/auth.service';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

// or via CommonJS
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  Resolve,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ContactComponent } from '../contact/contact.component';
import { Course } from '../Models/course';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService
  implements
    CanActivate,
    CanActivateChild,
    CanDeactivate<ContactComponent>,
    Resolve<Course[]>
{
  constructor(
    private AuthService: AuthService,
    private CourseService: CourseService,
    private Router: Router
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Course[] | Observable<Course[]> | Promise<Course[]> {
    // let CourseList: Course[] = [];
    // this.CourseService.getAllcourses().subscribe({
    //   next: (CourseResponse: Course[]) => {
    //     CourseList = CourseResponse;
    //   },
    // });
    // return CourseList;
    return this.CourseService.getAllcourses();
  }
  canDeactivate(
    component: ContactComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (!component.Form.dirty) {
      return true;
    } else {
      return new Promise<boolean>((resolve) => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Leave this',
        }).then((result) => {
          if (result.isConfirmed) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
      });
    }
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute, state);
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this.AuthService.IAuthenticated()) {
      return true;
    } else {
      this.Router.navigate(['LogIn']);
      return false;
    }
  }
}
