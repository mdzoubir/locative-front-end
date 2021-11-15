import { Pipe, PipeTransform } from '@angular/core';
import {Admin} from '../../moduls/admin';

@Pipe({
  name: 'adminsFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(admins: Admin[], searchValue: string): Admin[] {
    if (!admins || !searchValue){
      return  admins;
    }
    return admins.filter(admin =>
      admin.firstName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      admin.lastName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      admin.email.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      admin.address.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    )
  }
}


