import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
  constructor(private ActivatedRoute: ActivatedRoute, private Router: Router) {}

  OnSearchClicked(value: string) {
    // console.log(value);
    this.Router.navigate(['/Courses'], { queryParams: { Search: value } });
  }
}
