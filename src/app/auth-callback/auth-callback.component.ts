import { Component, OnInit } from '@angular/core';
import { User, UserManager } from 'oidc-client-ts';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss']
})
export class AuthCallbackComponent implements OnInit {
  
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
  }

  ngOnInit(): void {
    this.userManager.signoutPopupCallback();
  }

}
