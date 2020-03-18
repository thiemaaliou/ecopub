import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  logoUrl: string = environment.assetsUrl+'images/logo.png';
  sendingRequest: boolean = false;
  loginForm = new FormGroup({
   email: new FormControl('', [Validators.required]),
   password: new FormControl('', [Validators.required]),
 });
  constructor(private userService: UserService, private router: Router, private utilsService: UtilsService) {}

  login(){
    this.sendingRequest = !this.sendingRequest;
    this.userService.login(this.loginForm.value).subscribe((resp) => {
      this.sendingRequest = !this.sendingRequest;
      if(resp['code'] == 200 && resp['data'].access_token){
        localStorage.setItem('ecopub-token', resp['data'].access_token);
        localStorage.setItem('ecopub-user', JSON.stringify(resp['data'].user));
        this.utilsService.toggleMenuByUser(resp['data'].user.organization_id);
        if(resp['data'].user.organization_id == 1){
          this.router.navigate(['/dashboard']);
        }else{
          this.router.navigate(['/home']);
        }
      }else{
        this.utilsService.presentToast("Identifiants non valides ou inexistants");
      }
    }, error => {
      this.utilsService.presentToast(error.error.message);
      this.sendingRequest = !this.sendingRequest;
    });
  }

}
