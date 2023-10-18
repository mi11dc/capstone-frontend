import { Injectable } from "@angular/core";
import { config } from "app/config";
import { ApiService } from "app/core/services/api.service";

@Injectable({
    providedIn: 'root'
})

export class VenueService {
  
    constructor(
        private api: ApiService
    ) { }

    getVenues(request: any) {
        return this.api.post(config.partialUrls.getAllVenues, request);
    }

    venueCreate(request: any) {
        return this.api.post(config.partialUrls.venueAdd, request);
    }

    venueDelete(request: any) {
        return this.api.post(config.partialUrls.venueDelete, request);
    }
}
