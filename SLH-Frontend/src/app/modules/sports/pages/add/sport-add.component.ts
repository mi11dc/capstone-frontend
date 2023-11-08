import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SportService } from "../../sports.service";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: 'sport-add',
    templateUrl: './sport-add.component.html'
})

export class SportAddComponent implements OnInit {
    
    sportForm: FormGroup;
    isDataLoaded = false;
    submitted = false;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private sport: SportService,
        private toast: ToastrService,
    ) { }
    
    get f() {
        return this.sportForm.controls;
    }

    ngOnInit(): void {
        this.setDefaultData();
    }

    setDefaultData() {
        this.sportForm = this.fb.group({
            name: [ null, [
                Validators.required
            ] ]
        });

        this.isDataLoaded = true;
    }

    onBackButton() {
        this.router.navigate(['/sports']);
    }

    onSubmit() {
        this.submitted = true;
        console.log(this.f);
        if (this.sportForm.invalid) {
            return;
        }
        const obj = {
            name: this.f.name.value
        };
        this.sport.sportCreate(obj).subscribe(res => {
            this.router.navigate(['/sports']);
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