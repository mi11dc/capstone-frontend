import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tableFilter'
})

export class TableSearchPipe implements PipeTransform {
    transform(array: any, query: string, searchfrom: string[]): any {
        if (query) {
            return this.filter(query, array, searchfrom);
        }
        return array;
    }

    filter(query: string, array: any, from: string[]) {
        for (const item in from) {
            let mustreturn = false;
            array.map(x => {
                if (x[from[parseInt(item, 10)]].toString().toLowerCase().indexOf(query.toString().toLowerCase()) > -1 ) {
                    mustreturn = true;
                }
            });
            if (mustreturn) {
                return _.filter(array, y =>
                    y[from[parseInt(item, 10)]].toString().toLowerCase().indexOf(query.toString().toLowerCase()) > -1
                );
            }
        }
        return [];
    }
}
