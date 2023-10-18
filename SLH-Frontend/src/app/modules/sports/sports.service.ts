import { Injectable } from "@angular/core";
import { config } from "app/config";
import { ApiService } from "app/core/services/api.service";

@Injectable({
    providedIn: 'root'
})

export class SportService {
  
    constructor(
        private api: ApiService
    ) { }

    getSports(request: any) {
        return this.api.post(config.partialUrls.getAllSports, request);
    }

    sportCreate(request: any) {
        return this.api.post(config.partialUrls.sportAdd, request);
    }

    sportDelete(request) {
        return this.api.post(config.partialUrls.sportDelete, request);
    }
}
