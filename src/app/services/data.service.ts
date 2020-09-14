import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private http: HttpClient) {}

  getBaseUrl() {
    return "http://localhost:8100/";
  }

  MarkAttendence(obj) {
    let id = obj["reg_no"];
    let NADIL_URL = `https://www.alnadialburhani.com/app/attendance.php?reg_no=${id}&date=2020-09-05`;

    return this.http.get<any>(NADIL_URL);
  }
}
