import { Component } from '@angular/core';
import { User, UserManager } from 'oidc-client-ts';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  userManager: UserManager;
  constructor() {
    const settings = {
      authority: "https://localhost:5001/",
      client_id: "diaries-front",
      redirect_uri: "https://localhost:4200/auth-callback",
      response_type: 'code',
      scope: "openid profile offline_access",
      popupWindowTarget:"loginPopup"
    };
    this.userManager = new UserManager(settings);
    this.userManager.events.addAccessTokenExpiring(function(){
      console.log("access token expiring...")
    });
  }

  public login() {
    this.userManager.signinPopup();
  }

  //silent_redirect_uri: `${environment.clientRoot}silent-callback.html`,
}
