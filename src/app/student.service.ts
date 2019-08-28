import { Injectable } from '@angular/core';
import { Student } from './student';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { Address } from './address';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

 private students = "https://jsonplaceholder.typicode.com/users";

  /* students: Student[] = [
    {
      id: 1,
      name: "krishna",
      username: "Balakrishna.P",
      email: "balakrishna.p@gmail.com"
    },

    {
    id: 2,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
  },

  {
    id: 3,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv"
  }

  ];
*/
  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.students);
  }

  /* getAddress() {
    return this.getAddress();
  }
  */
}
