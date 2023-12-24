import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';
import { Course } from '../Models/course';
import { CourseService } from '../Services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  constructor(private ActivatedRoute: ActivatedRoute) {}

  SearchString: string;

  ngOnInit(): void {
    // this.SearchString =
    //   this.ActivatedRoute.snapshot.queryParamMap.get('Search');

    // this.SearchString = this.ActivatedRoute.snapshot.queryParams['Search'];

    // this.ActivatedRoute.queryParams.subscribe({
    //   next: (Res: any) => {
    //     // console.log(Res.get('Search'));
    //     this.SearchString = Res['Search'];
    //   },
    // });

    this.ActivatedRoute.queryParamMap.subscribe({
      next: (Res: any) => {
        // console.log(Res.get('Search'));
        this.SearchString = Res.get('Search');
      },
    });
    if (this.isUnKnown()) {
      // this.coursesService.getAllcourses().subscribe({
      //   next: (Data: Course[]) => {
      //     this.AllCourses = Data;
      //   },
      // });
      this.AllCourses = this.ActivatedRoute.snapshot.data['courses'];
    } else {
      this.AllCourses = this.coursesService.courses.filter((c) =>
        c.title
          .toLocaleLowerCase()
          .includes(this.SearchString.toLocaleLowerCase())
      );
    }
  }
  coursesService = inject(CourseService);
  AllCourses: Course[] = this.coursesService.courses;
  private isUnKnown() {
    if (
      this.SearchString === undefined ||
      this.SearchString === '' ||
      this.SearchString === null
    ) {
      return true;
    } else {
      return false;
    }
  }
}
