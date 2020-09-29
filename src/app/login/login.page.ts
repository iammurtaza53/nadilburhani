import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { from } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { ToastController } from '@ionic/angular'



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  att_form: FormGroup;
  alertCtrl: any;

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private toastController: ToastController ) {
      this.att_form = this.formBuilder.group({
        email: ['', Validators.required,  ],
        pass: ['', Validators.required,  ]
      });
  }


  logForm(){
    this.dataService.Login(this.att_form.value);
  }







  ngOnInit() {

    

  }




  goToRegisterPage() {
    this.navCtrl.navigateForward('/register');
  }

}
