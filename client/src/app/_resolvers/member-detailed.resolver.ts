import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Member } from '../_models/member';
import { MembersService } from '../_services/members.service';

@Injectable({
  providedIn: 'root'
  // resolvers are instantiated the same way as services
})

export class MemberDetailedResolver implements Resolve<Member> {

  constructor(private memberService: MembersService) {

  }
  // we dont need to subscribe inside of root resolvers, the rooter does it automatically
  // it also deals with the unsub
  resolve(route: ActivatedRouteSnapshot): Observable<Member> {
    // you can use this to get any data you want
    // if you want your data before you construct the template
    return this.memberService.getMember(route.paramMap.get('username'));
  }
}
