import { Pipe, PipeTransform } from '@angular/core';

import { ListItem } from './multiselect.model';

@Pipe({
    name: 'listFilter',
    pure: false
})
export class ListFilterPipe implements PipeTransform {
    transform(items: ListItem[], filter: ListItem, isRemoteFilter: boolean): ListItem[] {
        if (!items || !filter || isRemoteFilter) {
            return items;
        }
        return items.filter((item: ListItem) => this.applyFilter(item, filter));
    }
    applyFilter(item: ListItem, filter: ListItem): boolean {
        return !(filter.itemName && item.itemName && item.itemName.toLowerCase().indexOf(filter.itemName.toLowerCase()) === -1);
    }
}
