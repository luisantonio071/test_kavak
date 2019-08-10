import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {PlaceholderService} from '../services/placeholder.service';
import {ActivatedRouteSnapshot} from '@angular/router';
import {PostInterface} from '../interfaces/postInterface';
import {filter, map} from 'rxjs/operators';

@Injectable()
export class PostResolver implements Resolve<PostInterface[]> {
    constructor(private ps: PlaceholderService) {
    }

    resolve(route: ActivatedRouteSnapshot) {
        return this.ps.getPosts(route.paramMap.get('palabra'));
    }
}
