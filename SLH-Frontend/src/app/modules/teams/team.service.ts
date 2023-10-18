import { Injectable } from "@angular/core";
import { config } from "app/config";
import { ApiService } from "app/core/services/api.service";

@Injectable({
    providedIn: 'root'
})

export class TeamService {
  
    constructor(
        private api: ApiService
    ) { }

    getTeams(request: any) {
        return this.api.post(config.partialUrls.getAllTeams, request);
    }

    teamCreate(request: any) {
        return this.api.post(config.partialUrls.teamAdd, request);
    }

    teamDelete(request) {
        return this.api.post(config.partialUrls.teamDelete, request);
    }

    getSports(request: any) {
        return this.api.post(config.partialUrls.getAllSports, request);
    }

    getOwners(request: any) {
        return this.api.post(config.partialUrls.getUsersRoleWise, request);
    }
}
