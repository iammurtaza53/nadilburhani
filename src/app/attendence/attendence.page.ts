import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { ToastController } from '@ionic/angular'
import { NFC } from '@ionic-native/nfc/ngx';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.page.html',
  styleUrls: ['./attendence.page.scss'],
})

export class AttendencePage implements OnInit {

  att_form: FormGroup;
  alertCtrl: any;
  readerMode$: any;

  constructor(private formBuilder: FormBuilder, private dataService: DataService,
    private toastController: ToastController, private nfc: NFC) {
    this.att_form = this.formBuilder.group({
      reg_no: ['', Validators.required,],
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

  
  async openNFC() {
  // Read NFC Tag - Android
    // Once the reader mode is enabled, any tags that are scanned are sent to the subscriber
    let flags = this.nfc.FLAG_READER_NFC_A | this.nfc.FLAG_READER_NFC_V;
    this.readerMode$ = this.nfc.readerMode(flags).subscribe(
        tag => this.openToast('success',JSON.stringify(tag)),
        err => this.openToast('danger',err)
    );

    // // Read NFC Tag - iOS
    // // On iOS, a NFC reader session takes control from your app while scanning tags then returns a tag
    // try {
    //   let tag = await this.nfc.scanNdef();
    //   console.log(JSON.stringify(tag));
    //   this.openToast('success',JSON.stringify(tag))
    // } catch (err) {
    //   console.log('Error reading tag', err);
    //   this.openToast('danger',err)
    // }
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
