import { Component } from '@angular/core';
import { AuthConfig, JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from 'src/app/sso.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private oauthService:OAuthService){
    this.configureSingleSignOn();
  }

  configureSingleSignOn(){
    this.oauthService.configure(authCodeFlowConfig);
 this.oauthService.loadDiscoveryDocumentAndTryLogin();
 this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login(){
 this.oauthService.initImplicitFlow();
  }
  logout(){
    this.oauthService.logOut();
  }
}
