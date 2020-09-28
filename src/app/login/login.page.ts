import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // [x: string]: any;


  // validations_form: FormGroup;
  // errorMessage: string = '';

  // private todo : FormGroup;

  


  constructor(
    private navCtrl: NavController,
    // private formBuilder: FormBuilder
  ) { };




  ngOnInit() {

    // this.validations_form = this.formBuilder.group({
    //   email: new FormControl('', Validators.compose([
    //     Validators.required,
    //     Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    //   ])),
    //   password: new FormControl('', Validators.compose([
    //     Validators.minLength(5),
    //     Validators.required
    //   ])),
    // });
  }

  // validation_messages = {
  //   'email': [
  //     { type: 'required', message: 'Email is required.' },
  //     { type: 'pattern', message: 'Please enter a valid email.' }
  //   ],
  //   'password': [
  //     { type: 'required', message: 'Password is required.' },
  //     { type: 'minlength', message: 'Password must be at least 8 characters long.' }
  //   ]
  // };
  
  // loginUser(value) {
  //   this.dataService.loginUser(value)
  //     .then(res => {
  //       console.log(res);
  //       this.errorMessage = "";
  //       this.navCtrl.navigateForward('/dashboard');
  //     }, err => {
  //       this.errorMessage = err.message;
  //     })
  // }
  goToRegisterPage() {
    this.navCtrl.navigateForward('/register');
  }

}
