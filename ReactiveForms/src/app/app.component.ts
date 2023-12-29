import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    this.RegisterForm();
    // this.ReactiveForm.get('FirstName').valueChanges.subscribe({
    //   next: (res) => {
    //     console.log(res);
    //   },
    // });

    // this.ReactiveForm.valueChanges.subscribe({
    //   next: (res) => {
    //     console.log(res);
    //   },
    // });

    // this.ReactiveForm.statusChanges.subscribe({
    //   next: (res) => {
    //     console.log(res);
    //   },
    // });

    // this.ReactiveForm.get("Email").statusChanges.subscribe({
    //   next:(res)=>{
    //     console.log(res)
    //   }
    // })

    this.ReactiveForm.statusChanges.subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }

  RegisterForm() {
    this.ReactiveForm = new FormGroup({
      FirstName: new FormControl(null, Validators.required),
      LastName: new FormControl(null, Validators.required),
      Email: new FormControl(null, [Validators.required, Validators.email]),
      UserName: new FormControl(null),
      DateOfBirth: new FormControl(null),
      Gender: new FormControl(null),
      Address: new FormGroup({
        Street: new FormControl(null, [Validators.required]),
        Country: new FormControl(['America', 'India'], [Validators.required]),
        Code: new FormControl(null, [Validators.required]),
        City: new FormControl(null, [Validators.required]),
        Region: new FormControl(null, [Validators.required]),
      }),
      Skills: new FormArray([]),
      Experience: new FormArray([]),
    });
  }
  title = 'ReactiveForms';
  ReactiveForm: FormGroup;
  OnFormSubmited() {
    console.log(this.ReactiveForm);
  }
  AddSkills() {
    let Skills = this.ReactiveForm.get('Skills') as FormArray;

    Skills.push(new FormControl(null, [Validators.required]));
  }

  AddExperience() {
    var Experience = new FormGroup({
      Company: new FormControl(null),
      Position: new FormControl(null),
      Exp: new FormControl(null),
      Start: new FormControl(null),
      End: new FormControl(null),
    });

    let Experiences = this.ReactiveForm.get('Experience') as FormArray;

    Experiences.push(Experience);
  }
  RemoveControl(index: number, ControlName: string) {
    let Experiences = this.ReactiveForm.get(ControlName) as FormArray;
    Experiences.removeAt(index);
  }

  GenrateuserName() {
    let UserName = '';
    let FName: string = this.ReactiveForm.get('FirstName').value;
    let LName: string = this.ReactiveForm.get('LastName').value;
    let DateOfBirth: string = this.ReactiveForm.get('DateOfBirth').value;
    if (FName.length > 3) {
      UserName += FName.slice(0, 3);
    } else {
      UserName += FName;
    }

    UserName += '_';
    if (LName.length > 3) {
      UserName += LName.slice(0, 3);
    } else {
      UserName += LName;
    }
    UserName += '_';

    var Year = new Date(DateOfBirth).getFullYear();
    UserName += Year;

    this.ReactiveForm.get('UserName').patchValue(UserName);
    // this.ReactiveForm.patchValue({
    //   UserName: UserName,
    // });
  }
}
