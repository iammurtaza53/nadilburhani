import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { ToastController } from '@ionic/angular'
import {NFC, Ndef} from '@ionic-native/nfc/ngx';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.page.html',
  styleUrls: ['./attendence.page.scss'],
})

export class AttendencePage implements OnInit {

  att_form: FormGroup;
  alertCtrl: any;

  constructor(private formBuilder: FormBuilder, private dataService: DataService, private toastController: ToastController, private nfc: NFC, private ndef: Ndef, ) {
    this.att_form = this.formBuilder.group({
      reg_no: ['', Validators.required,  ],
      date: ""
    });
  }




  logForm() {
    var myDate = new Date();
    const format = 'yyyy-MM-dd';
    const locale = 'en-US';
    const formattedDate = formatDate(myDate, format, locale);
    this.att_form.value["date"] = formattedDate;

    this.dataService.MarkAttendence(this.att_form.value).subscribe(res => {
      console.log(res)
      var msg = "";

      if (res.success == true) {
        var name = res["data"]["member_name"];
        msg = name + " " + "Attendance Marked Sucessfully";
        this.openToast('success', msg);
      }
      else {
        msg = res.error
        this.openToast('danger', msg);
      }
    });
  }

  async openToast(color, msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color: color
    });
    toast.present();
  }

  

  ngOnInit() { }


}
