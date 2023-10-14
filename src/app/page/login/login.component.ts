import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConfig, JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from 'src/app/sso.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private oauthService:OAuthService,private router:Router){
    this.configureSingleSignOn();
    this.oauthService.configure({
      issuer: 'https://api.instagram.com',
      clientId: '1044572183479805',
      responseType: 'token',
      redirectUri: 'https://socialsizzle.heroku.com/auth/',
    })
    this.oauthService.setStorage(sessionStorage);
  }

  configureSingleSignOn(){
    this.oauthService.configure(authCodeFlowConfig);
 this.oauthService.loadDiscoveryDocumentAndTryLogin();
 this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login(){
 this.oauthService.initImplicitFlow();
 this.router.navigateByUrl('home');
  }
  logout(){
    this.oauthService.logOut();
  }

  //  token(){
  //   let claims:any=this.oauthService.getIdentityClaims();
  //   return claims ? claims:null
  // }
}
