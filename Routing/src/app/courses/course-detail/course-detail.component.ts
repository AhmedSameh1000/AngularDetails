import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent {
  constructor(
    private CourseService: CourseService,
    private ActivatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    // this.CourseId = this.ActivatedRoute.snapshot.params['Id'];
    // this.CourseId = +this.ActivatedRoute.snapshot.paramMap.get('Id');
    // this.ActivatedRoute.params.subscribe({
    //   next: (data: any) => {
    //     this.CourseId = +data['Id'];
    //     this.SelectedCourse = this.CourseService.courses.find(
    //       (c) => c.id == this.CourseId
    //     );
    //   },
    // });
    this.ActivatedRoute.paramMap.subscribe({
      next: (data: any) => {
        this.CourseId = +data.get('Id');
        this.SelectedCourse = this.CourseService.courses.find(
          (c) => c.id == this.CourseId
        );
      },
    });
  }

  SelectedCourse: Course;
  CourseId: number;
}
