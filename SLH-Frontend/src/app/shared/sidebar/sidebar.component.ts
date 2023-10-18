import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { Constants } from 'app/core/constants/constants';
import { RouteInfo } from 'app/core/models/global.model';
import { UtilityService } from 'app/core/services/utility.service';

const ROUTES: RouteInfo[] = Constants.ROUTES;

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent {
    isStaffUser = false;
    constructor(
        private router: Router
    ) {
        let userType;
        try {
            userType = localStorage.getItem('type');
            this.isStaffUser = (userType.toString() === '2');
        } catch (e) {
            this.isStaffUser = false;
        }
    }
    public menuItems: any[];
    image = UtilityService.getLocalStorage('image');
    name = UtilityService.getLocalStorage('name');
    isNotMobileMenu(){
        if( window.outerWidth > 991){
            return false;
        }
        return true;
    }

    ngOnInit() {
        this.menuItems = this.isStaffUser ? ROUTES.filter(menuItem => menuItem.id === 5) : ROUTES.filter(menuItem => menuItem);
    }
    ngAfterViewInit(){
    }

    logout() {
        localStorage.clear();
        this.router.navigate(['/auth/login']);
    }
}
