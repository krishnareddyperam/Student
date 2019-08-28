import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { Address } from '../address';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css'],
  providers: [StudentService]
})
export class StudentlistComponent implements OnInit {

  students: Student[] = [];

  // address: Address[] = [];

   inputName: string = '';

  constructor(private stdService: StudentService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
     this.stdService.getStudents().subscribe (
      student => { this.students = student;
      this.students = this.students ;
    });

   // this.getStudents();
  }

 /* onSelect(student: Student): void {
    this.students = this.students;
  } */

   FilterByName() {
    this.students = [] ;
    // tslint:disable-next-line:no-non-null-assertion
    if (this.inputName ! = '') {
      this.students.forEach(element => {
        if (
          element.name.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0
        ) {
          this.students.push(element);
        } else {
          this.students.push();
        }
      });
    } else {
      this.students = this.students; // text box empty then call to list array.
    }

    console.log(this.students);
  }


  Search(): void {
   // this.students = this.students;
   this.router.navigate(['/students']);
  }

/*
   getStudents(): void {
    this.stdService.getStudents().subscribe (
      student => this.students = student,
    );
  }
 */

}
