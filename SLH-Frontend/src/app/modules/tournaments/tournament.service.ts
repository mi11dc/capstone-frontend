import { Injectable } from "@angular/core";
import { config } from "app/config";
import { ApiService } from "app/core/services/api.service";

@Injectable({
    providedIn: 'root'
})

export class TournamentService {
  
    constructor(
        private api: ApiService
    ) { }

    getTournaments(request: any) {
        return this.api.post(config.partialUrls.getAllTournaments, request);
    }

    tournamentCreate(request: any) {
        return this.api.post(config.partialUrls.tournamentAdd, request);
    }

    tournamentDelete(request) {
        return this.api.post(config.partialUrls.tournamentDelete, request);
    }

    getSports(request: any) {
        return this.api.post(config.partialUrls.getAllSports, request);
    }

    getOwners(request: any) {
        return this.api.post(config.partialUrls.getUsersRoleWise, request);
    }
}
