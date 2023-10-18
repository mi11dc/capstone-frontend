import { Injectable } from '@angular/core';

@Injectable()

export class UtilityService {
    public static convertObjectToJson(res: any): any {
        return JSON.parse(JSON.stringify(res.body));
    }
    public static setLocalStorage(property: string, value: string): void {
        localStorage.setItem(property, value);
    }
    public static setMultiLocalStorage(array): void {
        array.forEach(item => {
            localStorage.setItem(item[0], item[1]);
        });
    }
    public static getLocalStorage(property: string): string|null {
        if (localStorage.getItem(property)) {
            return localStorage.getItem(property);
        } else {
            return null;
        }
    }
    public static removeItemLocalStorage(property: string) {
        if (localStorage.getItem(property)) {
            localStorage.removeItem(property);
        }
    }
    public static clearLocalStorage() {
        localStorage.clear();
    }
    public static createParameterizedUrl(url: string, params: any): string {
        let newUrl = url;
        Object.keys(params).forEach(param => {
            const regex = new RegExp('{' + param + '}', 'g');
            newUrl = newUrl.replace(regex, params[param]);
        });
        return newUrl;
    }
}
