import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { ToastrService } from 'ngx-toastr';
import { UtilityService } from 'app/core/services/utility.service';

declare var $: any;

@Component({
    selector: 'login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    focus;
    focus1;
    focus2;
    test: Date = new Date();
    private toggleButton;
    private sidebarVisible: boolean;
    private nativeElement: Node;
    loginForm: FormGroup;
    public submitted = false;
    constructor(
        private element: ElementRef,
        private FB: FormBuilder,
        private auth: AuthService,
        private toast: ToastrService,
        private router: Router
    ) {
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        this.loginForm = this.FB.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
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
        return this.loginForm.controls;
    }
    login() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        } else {
            let request = {
                email: this.f.email.value,
                password: this.f.password.value
            };
            this.auth.login(request).subscribe((response) => {
                let data = response.body.item;
                UtilityService.setMultiLocalStorage([
                    ['name', data.firstName + ' ' + data.lastName],
                    ['token', data.token],
                    ['id', data.userId],
                    ['rolename', data.userRoleName],
                    ['role', data.userRoleId],
                    ['user', JSON.stringify(data)]
                ]);
                this.router.navigate(['/tournaments']);
            });
        }
    }
}
