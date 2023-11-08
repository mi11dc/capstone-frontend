import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { VenueService } from "../../venue.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

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
        private toast: ToastrService,
    ) { }
    
    get f() {
        return this.venueForm.controls;
    }

    ngOnInit(): void {
        this.setDefaultData();
    }

    setDefaultData() {
        this.venueForm = this.fb.group({
            name: [ null, [
                Validators.required
            ] ],
            country: [ null, [
                Validators.required
            ] ],
            location: [ null, [
                Validators.required
            ] ],
        });

        this.isDataLoaded = true;
    }

    onBackButton() {
        this.router.navigate(['/venues']);
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
        }, e => {
            if (e.status === 401) {
                this.toast.error(e.message, 'Error');
                this.router.navigate(['/auth/login']);
            }
            if (e && e.error && e.error.message && e.error.message[0]) {
                this.toast.error(e.error.message[0]);
            } else {
                this.toast.error(e.message, 'Error');
            }
        });
    }
}