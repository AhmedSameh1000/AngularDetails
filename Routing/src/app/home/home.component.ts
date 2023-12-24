import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // constructor(private ActivatedRoute: ActivatedRoute) {}
  ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.ActivatedRoute.fragment.subscribe({
      next: (freg: any) => {
        this.JumpTOSection(freg);
      },
    });
  }
  private JumpTOSection(SectionId: any) {
    if (SectionId == null || SectionId == undefined) {
      return;
    }

    let Section = document.getElementById(SectionId);
    Section.scrollIntoView({ behavior: 'smooth' });
  }
}
