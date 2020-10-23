import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  att_form: FormGroup;
  alertCtrl: any;
  errorMessage: string = 'No Account Registered';

  constructor(private navCtrl: NavController, private formBuilder: FormBuilder, private dataService: DataService) {
    this.att_form = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
      ])]
    });
  }

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 7 characters long.' }
    ]
  };

  logForm() {
    let email = this.att_form.value.email
    let password = this.att_form.value.password
    let result = this.dataService.Login(email, password)
    if(result){
      this.navCtrl.navigateForward('/dashborad');
    }
    else{
      console.log(result)
    }
 
  }

  ngOnInit() { }

  goToRegisterPage() {
    this.navCtrl.navigateForward('/register');
  }

}
