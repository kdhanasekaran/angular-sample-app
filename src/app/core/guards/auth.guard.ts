import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';

import { AuthenticationService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
        private notificationService: NotificationService,
        private authService: AuthenticationService,
        private jwtHelper: JwtHelperService) { }

    canActivate() {

        const token: string = this.authService.getCurrentUser();  
        
        console.log(token);

        if (token != null) {
            /*    
            if (!this.jwtHelper.isTokenExpired(token)) {
                return true;
            } else {
                this.notificationService.openSnackBar('Your session has expired');
                this.router.navigate(['auth/login']);
                return false;
            }*/
            return true;
        }

        this.router.navigate(['auth/login']);
        return false;
    }
}
