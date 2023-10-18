import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { TeamService } from "../../team.service";
import { Router } from "@angular/router";
import { UtilityService } from "app/core/services/utility.service";
import { Dropdowndata } from "app/core/models/global.model";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: 'team-add',
    templateUrl: './team-add.component.html'
})

export class TeamAddComponent implements OnInit {
    teamForm: FormGroup;
    isDataLoaded = false;
    submitted = false;
    userRole;

    ownerList: Dropdowndata[];
    sportList: Dropdowndata[];

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private team: TeamService,
        private toast: ToastrService
    ) { }
    
    get f() {
        return this.teamForm.controls;
    }

    ngOnInit(): void {
        this.getSports();
    }

    setDefaultData() {
        this.teamForm = this.fb.group({
            name: [ null ],
            country: [ null ],
            owner: [ null ],
            sport: [ null ]
        });
        this.userRole = UtilityService.getLocalStorage('role');

        this.isDataLoaded = true;
    }

    getSports() {
        let request = {};
        this.team.getSports(request).subscribe((response) => {
            let data = response.body.item;
            this.sportList = [];
            for (let i in data) {
                this.sportList.push(data[i]);
                if (i == "0") {
                    this.f.sport.setValue(data[i].id);
                }
            }
            this.getOwners();
        }, error => {
            this.toast.error(error.message, 'Error');
        });
    }

    getOwners() {
        let request = {
            roleId: 3
        };
        this.team.getOwners(request).subscribe((response) => {
            let data = response.body.item;
            this.ownerList = [];
            for (let i in data) {
                this.ownerList.push({
                    id: data[i].id,
                    name: (data[i].firstName) ? (data[i].firstName + ' ' + data[i].lastName) : data[i].username
                });
                if (i == "0") {
                    this.f.sport.setValue(data[i].id);
                }
            }
            this.setDefaultData();
        }, error => {
            this.toast.error(error.message, 'Error');
        });
    }

    onSubmit() {
        this.submitted = true;
        console.log(this.f);
        if (this.teamForm.invalid) {
            return;
        }
        const obj = {
            name: this.f.name.value,
            sportId: this.f.sport.value,
            ownerId: (this.userRole && this.userRole === 1) ? this.f.owner.value : 0,
            country: this.f.country.value
        };
        // this.team.teamCreate(obj).subscribe(res => {
        //     this.router.navigate(['/teams']);
        // }, error => {
        //     if (error.status === 401) {
        //         this.router.navigate(['auth/login']);
        //     }
        // });
    }
}