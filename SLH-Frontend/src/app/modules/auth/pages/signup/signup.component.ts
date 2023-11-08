import { Component, ElementRef, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../auth.service";
import { ToastrService } from "ngx-toastr";
import { Router, ActivatedRoute } from '@angular/router';
import { UtilityService } from "app/core/services/utility.service";
import { MustMatch } from "../../_core/_helper/must-match.validator";
import { environment } from "environments/environment";
import { Dropdowndata } from "app/core/models/global.model";

declare var $: any;

@Component({
    selector: 'signup-cmp',
    templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit {
    focus;
    focus1;
    focus2;
    focus3;
    focus4;
    test: Date = new Date();
    private toggleButton;
    private sidebarVisible: boolean;
    private nativeElement: Node;
    signupForm: FormGroup;
    public submitted = false;

    roleList: Dropdowndata[];
    sportList: Dropdowndata[];
    isPageLoad = false;
    constructor(
        private element: ElementRef,
        private FB: FormBuilder,
        private auth: AuthService,
        private toast: ToastrService,
        private router: Router
    ) {
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        this.signupForm = this.FB.group({
            email: ['', [
                Validators.required,
                Validators.pattern(environment.patterns.email)
            ] ],
            password: ['', [
                Validators.required,
                Validators.pattern(environment.patterns.password)
            ] ],
            confirm: ['', [
                Validators.required
            ] ],
            role: ['', [
                Validators.required
            ]],
            sport: ['']
        }, {
            validator: MustMatch('password', 'confirm')
        });
    }
    checkFullPageBackgroundImage() {
        var $page = $('.full-page');
        var image_src = $page.data('image');

        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }
    };

    ngOnInit() {
        this.checkFullPageBackgroundImage();
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        var navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];

        this.getRoles();

        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)
    }
    ngOnDestroy() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
    }
    sidebarToggle() {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
    get f (){
        return this.signupForm.controls;
    }

    getRoles() {
        let request = {};
        this.auth.getAllRoles(request).subscribe((response) => {
            let data = response.body.item;
            this.roleList = [];
            for (let i in data) {
                this.roleList.push(data[i]);
                if (i == "0") {
                    this.f.role.setValue(data[i].id);
                }
            }
            this.getSports();
        }, e => {
            if (e && e.error && e.error.message && e.error.message[0]) {
                this.toast.error(e.error.message[0]);
            } else {
                this.toast.error(e.message, 'Error');
            }
        });
    }

    getSports() {
        let request = {};
        this.auth.getAllSports(request).subscribe((response) => {
            let data = response.body.item;
            this.sportList = [];
            for (let i in data) {
                this.sportList.push(data[i]);
                if (i == "0") {
                    this.f.sport.setValue(data[i].id);
                }
            }
            this.isPageLoad = true;
        }, e => {
            if (e && e.error && e.error.message && e.error.message[0]) {
                this.toast.error(e.error.message[0]);
            } else {
                this.toast.error(e.message, 'Error');
            }
        });
    }

    signup() {
        this.submitted = true;
        if (this.signupForm.invalid) {
            return;
        } else {
            let request = {
                email: this.f.email.value,
                password: this.f.password.value,
                username: this.f.email.value,
                userRole: this.f.role.value,
                sportId: (this.f.role.value === 4) ? this.f.sport.value : 0,
            };
            this.auth.signup(request).subscribe((response) => {
                let msg = response.body.message;
                this.toast.success(msg);
                let data = response.body.item;
                let name = (data.lastName) ? (data.firstName + ' ' + data.lastName) : data.firstName;
                UtilityService.setMultiLocalStorage([
                    ['name', name],
                    ['token', data.token],
                    ['id', data.id],
                    ['rolename', data.userRoleName],
                    ['role', data.userRoleId],
                    ['user', JSON.stringify(data)]
                ]);
                this.router.navigate(['/tournaments']);
            }, e => {
                if (e && e.error && e.error.message && e.error.message[0]) {
                    this.toast.error(e.error.message[0]);
                } else {
                    this.toast.error(e.message, 'Error');
                }
            });
        }
    }
}