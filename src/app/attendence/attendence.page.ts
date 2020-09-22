import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DataService } from '../services/data.service';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular'
import { from } from 'rxjs';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { type } from 'os';
// import { type } from 'os';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.page.html',
  styleUrls: ['./attendence.page.scss'],
})
export class AttendencePage implements OnInit {

  
  att_form: FormGroup;
  alertCtrl: any;

  constructor(
    private dialogs: Dialogs,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    public toastController: ToastController,
    // private navCtrl: NavController,
    ) {
    this.att_form = this.formBuilder.group({
      reg_no: ['', Validators.required, ],

      date: ""
    });
  }

  logForm() {
    console.log(this.att_form.value);
    var reg_no = this.att_form.value["reg_no"];
    var myDate  =  new Date();
    const format = 'yyyy-MM-dd';
    const locale = 'en-US';
    const formattedDate = formatDate(myDate, format, locale);
    this.att_form.value["date"] = formattedDate;
    
    this.dataService.MarkAttendence(this.att_form.value).subscribe(res =>
      { 
        console.log(res);
        var msg = "";
        
        if(res.success == true){
          var name = res["data"]["member_name"];
          msg =  name +" "+ "Attendance Marked Sucessfully";
          this.openToast(true,msg);
        }
        else{
          if(res.error){
            msg = res.error
          }
          this.openToast(false,msg);
        }
        //var member_name = res["data"]["member_name"];
       
        //this.openToast(data)
      });
   

  }
  
    //toast.present();
  async openToast(val,msg) {
    var color = "success";
    
    const successtoast = this.toastController.create({
      message: msg,
      duration: 1000,
      color:"success",
    });
    const dangertoast = this.toastController.create({
      message: msg,
      duration: 1000,
      color:"danger",
    });
    if(!val){
      (await dangertoast).present();
    }
    else{
      (await successtoast).present();
    }

  // this.dialogs.alert('Hello world')
  // .then(() => console.log('Dialog dismissed'))
  // .catch(e => console.log('Error displaying dialog', e));
  //  setTimeout(() => {
    
  //  }, 2000);
  
  }




  ngOnInit() {

 
  }


}
