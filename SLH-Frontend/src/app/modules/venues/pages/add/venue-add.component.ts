import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { VenueService } from "../../venue.service";
import { Router } from "@angular/router";

@Component({
    selector: 'venue-add',
    templateUrl: './venue-add.component.html'
})

export class VenueAddComponent implements OnInit {
    venueForm: FormGroup;
    isDataLoaded = false;
    submitted = false;
    
    constructor(
        private fb: FormBuilder,
        private router: Router,
        private venue: VenueService,
    ) { }
    
    get f() {
        return this.venueForm.controls;
    }

    ngOnInit(): void {
        this.setDefaultData();
    }

    setDefaultData() {
        this.venueForm = this.fb.group({
            name: [ null ],
            country: [ null ],
            location: [ null ],
        });

        this.isDataLoaded = true;
    }

    onSubmit() {
        this.submitted = true;
        console.log(this.f);
        if (this.venueForm.invalid) {
            return;
        }
        const obj = {
            name: this.f.name.value,
            country: this.f.country.value,
            location: this.f.location.value
        };
        this.venue.venueCreate(obj).subscribe(res => {
            this.router.navigate(['/venues']);
        }, error => {
            if (error.status === 401) {
                this.router.navigate(['auth/login']);
            }
        });
    }
}