import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { SportService } from "../../sports.service";

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
    ) { }
    
    get f() {
        return this.sportForm.controls;
    }

    ngOnInit(): void {
        this.setDefaultData();
    }

    setDefaultData() {
        this.sportForm = this.fb.group({
            name: [ null ]
        });

        this.isDataLoaded = true;
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
        }, error => {
            if (error.status === 401) {
                this.router.navigate(['auth/login']);
            }
        });
    }
}