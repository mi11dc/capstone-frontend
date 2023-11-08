import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Dropdowndata } from "app/core/models/global.model";
import { UtilityService } from "app/core/services/utility.service";
import { TeamService } from "../../team.service";
import { ToastrService } from "ngx-toastr";
import { switchMap } from "rxjs";
import { TeamData } from "../../_core/model/model";

@Component({
    selector: 'team-add-player',
    templateUrl: './addPlayer.component.html'
})

export class AddPlayerComponent implements OnInit {
    teamPlayerForm: FormGroup;
    isDataLoaded = false;
    submitted = false;

    playersList: Dropdowndata[];

    currUserId = UtilityService.getLocalStorage('id');
    currUserRole = UtilityService.getLocalStorage('role');

    teamId;
    teamDetails: TeamData;
    
    constructor(
        private fb: FormBuilder,
        private router: Router,
        private team: TeamService,
        private toast: ToastrService,
        private route: ActivatedRoute,
    ) { }

    get f() {
        return this.teamPlayerForm.controls;
    }
    
    ngOnInit(): void {
        this.setDefaultData();
    }

    setDefaultData() {
        this.teamPlayerForm = this.fb.group({
            teamId: [ null, [ Validators.required ] ],
            playerId: [ null, [ Validators.required ]]
        });

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
                this.setTeamData(res.body.item[0]);
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

    setTeamData(data) {
        this.teamDetails = data;

        this.getPlayers(this.teamDetails.sportId);
    }

    getPlayers(sportId) {
        let request = {
            sportId
        };
        this.team.getPlayers(request).subscribe((response) => {
            this.setPlayers(response.body.item);
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

    setPlayers(data) {
        console.log(data);
        this.isDataLoaded = true;
    }

    getObject() {
        let obj = {};
        let ownerId = (this.currUserRole.toString() === '1') ? 0 : parseInt(this.currUserId);
        Object.assign(obj, {
            SearchStr: "",
            PageNo: 1,
            PageSize: 5,
            ownerId: ownerId,
            IsDropDown: false,
            Id: this.teamId
        });
        return obj;
    }
}