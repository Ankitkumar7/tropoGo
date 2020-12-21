import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  courseForm: FormGroup
  batches: FormArray;
  selectedDate = new Date();
  a = [1,2,3]
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createCourseForm();
    


  }

  createCourseForm() {
    this.courseForm = this.fb.group({
      courseName: ['', [Validators.required]],
      courseGallery: [[], [Validators.required]],
      aircraftType: [null,[Validators.required]],
      batches: this.fb.array([ this.createItem() ])
      
    })

    console.log(this.courseForm);
    
  }


  createItem(): FormGroup {
    return this.fb.group({
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      courseLocation: ['', [Validators.required]],
      courseLanguage: [[], [Validators.required]],
      courseCost: [[], [Validators.required]],
      weekendCourse: [null, [Validators.required]],
      isHide: [false]

    });
  }

  addAnotherCourse(): void {
    this.batches = this.courseForm.get('batches') as FormArray;
    this.batches.push(this.createItem());
  }

  expand(i) {
    const currentValue = this.courseForm.get('batches')['controls'][i].value.isHide
    if(currentValue) {
      this.courseForm.get('batches')['controls'][i].get('isHide').setValue(false);
    } else {
      this.courseForm.get('batches')['controls'][i].get('isHide').setValue(true);

    }
  }
}
