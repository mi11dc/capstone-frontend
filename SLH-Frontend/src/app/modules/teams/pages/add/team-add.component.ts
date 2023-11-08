import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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

    ownerList: Dropdowndata[];
    sportList: Dropdowndata[];

    currUserId = UtilityService.getLocalStorage('id');
    currUserRole = UtilityService.getLocalStorage('role');

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
        this.setDefaultData();
    }

    setDefaultData() {
        this.teamForm = this.fb.group({
            name: [ null, [ Validators.required ] ],
            country: [ null, [ Validators.required ] ],
            owner: [ null ],
            sport: [ null ]
        });

        this.getSports();

    }

    getSports() {
        const queryParams = this.getObject();
        this.team.getSports(queryParams).subscribe((response) => {
            let data = response.body.item;
            this.sportList = [];
            for (let i in data) {
                this.sportList.push(data[i]);
                if (i == "0") {
                    this.f.sport.setValue(data[i].id);
                }
            }
            if (this.currUserRole && this.currUserRole === '1') {
                this.getOwners();
            }
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
                    name: (data[i].firstName) ? ((data[i].lastName) ? (data[i].firstName + ' ' + data[i].lastName) : data[i].firstName) : data[i].username
                });
                if (i == "0") {
                    this.f.owner.setValue(data[i].id);
                }
            }
            this.isDataLoaded = true;
        }, error => {
            this.toast.error(error.message, 'Error');
        });
    }

    onBackButton() {
        this.router.navigate(['/teams']);
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
            ownerId: (this.currUserRole && this.currUserRole === '1') ? this.f.owner.value : 0,
            country: this.f.country.value
        };
        this.team.teamCreate(obj).subscribe(res => {
            this.router.navigate(['/teams']);
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

    getObject() {
        let obj = {};
        let userId = (this.currUserRole.toString() === '1') ? 0 : parseInt(this.currUserId);
        Object.assign(obj, {
            SearchStr: '',
            PageNo: 0,
            PageSize: 0,
            UserId: userId,
            IsDropDown: true,
        });
        return obj;
    }
}