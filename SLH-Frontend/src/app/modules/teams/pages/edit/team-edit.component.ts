import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UtilityService } from "app/core/services/utility.service";
import { TeamService } from "../../team.service";
import { ToastrService } from "ngx-toastr";
import { switchMap } from "rxjs";
import { TeamData } from "../../_core/model/model";

@Component({
    selector: 'team-edit',
    templateUrl: './team-edit.component.html'
})

export class TeamEditComponent implements OnInit {
    teamForm: FormGroup;
    isDataLoaded = false;
    submitted = false;
    teamId;
    teamDetails: TeamData;

    currUserId = UtilityService.getLocalStorage('id');
    currUserRole = UtilityService.getLocalStorage('role');

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private team: TeamService,
        private toast: ToastrService
    ) { }
    
    get f() {
        return this.teamForm.controls;
    }

    ngOnInit(): void {
        this.setDefaultData();

        this.teamForm = this.fb.group({
            name: [ null, [ Validators.required ] ],
            country: [ null, [ Validators.required ] ],
            owner: [ null ]
        });
    }

    setDefaultData() {
        this.getTeamDetails();
    }

    getTeamDetails() {
        this.isDataLoaded = false;
        this.route.paramMap
            .pipe(switchMap(params => {
                this.teamId = +(params.get('id'))
                const queryParams = this.getObject();
                return this.team.getTeams(queryParams);
            }))
            .subscribe((res) => {
                this.teamDetails = res.body.item[0];
                console.log(res.body.item[0]);
                this.setFormData();
                this.isDataLoaded = true;
            });
    }

    setFormData() {
        this.f.name.setValue(this.teamDetails.name);
        this.f.country.setValue(this.teamDetails.country);
        this.f.owner.setValue(this.teamDetails.ownerId);
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
            sportId: 0,
            ownerId: (this.currUserRole && this.currUserRole === '1') ? this.f.owner.value : 0,
            country: this.f.country.value
        };
        this.team.teamUpdate(obj).subscribe(res => {
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
        let ownerId = (this.currUserRole.toString() === '1') ? 0 : parseInt(this.currUserId);
        Object.assign(obj, {
            SearchStr: "",
            PageNo: 1,
            PageSize: 5,
            OwnerId: ownerId,
            IsDropDown: false,
            Id: this.teamId
        });
        return obj;
    }
}