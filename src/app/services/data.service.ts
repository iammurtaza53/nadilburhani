import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  [x: string]: any;
  constructor(private http: HttpClient) {}

  MarkAttendence(obj) {
    let id = obj["reg_no"];
    let NADIL_URL = `https://www.alnadialburhani.com/app/attendance.php?reg_no=${id}&date=2020-09-05`;
 
    return this.http.get<any>(NADIL_URL);
  }

  Login(obj) {
    // let id = obj["email"];

  }
}
