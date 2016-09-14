import {Component, ViewEncapsulation} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {routes} from '../../../app/app.routes';
//import {Auth} from '../pages.routes';
import {AuthService} from '../../../app/auth.service';

import {Router} from '@angular/router';

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  directives: [],
  styles: [require('./login.scss')],
  template: require('./login.html')
})
export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  public routes = routes;
  public router:Router;
  public authService: AuthService;


  constructor(fb:FormBuilder, router: Router, auth: AuthService) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
    this.router = router;
    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
    this.authService = auth;
  }

  public onSubmit(values:Object) {//:void
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
    }
      
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        this.router.navigateByUrl("/pages/dashboard");
      }
    });

  }
}