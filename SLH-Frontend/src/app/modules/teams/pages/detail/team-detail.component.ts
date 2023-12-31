import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UtilityService } from "app/core/services/utility.service";
import { switchMap } from "rxjs";
import { TeamService } from "../../team.service";
import { TeamData } from "../../_core/model/model";
import { ToastrService } from "ngx-toastr";
import Swal from 'sweetalert2';

@Component({
    selector: 'team-detail',
    templateUrl: './team-detail.component.html'
})

export class TeamDetailComponent implements OnInit {
    
    teamId;
    isDataLoaded = false;
    teamDetails: TeamData;

    currUserId = UtilityService.getLocalStorage('id');
    currUserRole = UtilityService.getLocalStorage('role');

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private team: TeamService,
        private toast: ToastrService
    ) { }
    
    ngOnInit(): void {
        this.setDefaultData();
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

        this.teamDetails.lstPlayers = [];

        data.lstPlayers.forEach((obj, i) => {
            this.teamDetails.lstPlayers.push({
                id: obj.id,
                fName: obj.fName,
                lName: obj.lName,
                userBio: obj.userBio,
                sportId: obj.sportId,
                sportName: obj.sportName,
                dOB: obj.dOB,
                country: obj.country,
                joinedHistory: obj.joinedHistory
            });
        });

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

    onAddPlayer() {
        this.router.navigate([`/teams/${this.teamId}/addPlayer`]);
    }

    onReleasePlayer(teamPlayerId) {
        Swal.fire('Warning', 'Are you sure want to release this player?')
            .then(result => {
                if (result.value) {
                    const request = {
                        id: teamPlayerId
                    };
                    this.teamPlayerRelease(request);
                }
            });
    }

    teamPlayerRelease(request) {
        this.team.teamPlayerRelease(request).subscribe(res => {
            this.getTeamDetails();
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