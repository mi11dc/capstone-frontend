import { Injectable } from '@angular/core';
import { config } from '../../config/config';
import { ApiService } from 'app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(
        private api: ApiService
    ) { }

    login(request: any) {
        return this.api.post(config.partialUrls.login, request);
    }

    signup(request: any) {
        return this.api.post(config.partialUrls.signup, request);
    }

    getAllRoles(request: any) {
        return this.api.post(config.partialUrls.getAllRoles, request);
    }

    getAllSports(request: any) {
        return this.api.post(config.partialUrls.getAllSportsForRegister, request);
    }
}
