import { Injectable } from "@angular/core";
import { config } from "app/config";
import { ApiService } from "app/core/services/api.service";

@Injectable({
    providedIn: 'root'
})

export class MatchService {
  
    constructor(
        private api: ApiService
    ) { }

    getMatches(request: any) {
        return this.api.post(config.partialUrls.getAllMatches, request);
    }

    matchCreate(request: any) {
        return this.api.post(config.partialUrls.matchAdd, request);
    }

    matchDelete(request) {
        return this.api.post(config.partialUrls.matchDelete, request);
    }
}
