import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {

  constructor(private http: HttpClient,) { }

  MarkAttendence(obj) {
    let id = obj["reg_no"];
    let NADIL_URL = `https://www.alnadialburhani.com/app/attendance.php?reg_no=${id}&date=2020-09-05`;

    return this.http.get<any>(NADIL_URL);
  }

  Login(email, password) {
    if (email == 'admin@gmail.com' && password == 'admin123456') {
     return true
    } else {
     return false
    }
  }

  registerUser(value){}
}
