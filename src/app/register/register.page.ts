import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  att_form: FormGroup;
  alertCtrl: any;
  // errorMessage: string = '';



  constructor(private navCtrl: NavController, private formBuilder: FormBuilder, private dataService: DataService) { 
    this.att_form = this.formBuilder.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(9),
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
      ])],
      number: ['', Validators.compose([
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
      ])],
      address: ['', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])],
      date: ['', Validators.compose([
        Validators.required,
      ])],
      cnic: ['', Validators.compose([
        Validators.required,
      ])],
      school: ['', Validators.compose([
        Validators.required,
      ])]
    });
  }

  ngOnInit() {
    
  }



  goToLoginPage() {
    this.navCtrl.navigateForward('/login');
  }

}
