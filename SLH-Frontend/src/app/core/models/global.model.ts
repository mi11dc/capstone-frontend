// loader state interface
export interface LoaderState {
    show: boolean;
}

export interface APIResponse {
    message: any;
    item: any;
    code: number;
}

export interface Dropdowndata {
    id: number;
    name: string;
}

export interface CheckData {
    className: string;
    inputClassName: string;
    label: string;
}

export interface TableHeader {
    key: string;
    text: string;
    isSort: boolean;
}

export interface RouteInfo {
    id: number;
    path: string;
    title: string;
    type: string;
    collapse?: string;
    icontype: string;
    // icon: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}
