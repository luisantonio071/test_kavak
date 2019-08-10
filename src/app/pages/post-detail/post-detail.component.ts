import {Component, OnInit} from '@angular/core';
import {PlaceholderService} from '../../services/placeholder.service';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {PostInterface} from '../../interfaces/postInterface';

@Component({
    selector: 'app-post-detail',
    templateUrl: './post-detail.component.html',
    styles: []
})
export class PostDetailComponent implements OnInit {

    id: number;
    post: PostInterface;

    constructor(private ps: PlaceholderService,
                private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.pipe(
            map(params => params['id']))
            .subscribe(id => {
                this.id = id;
            });
    }

    ngOnInit() {
        this.ps.getPost(this.id)
            .then(
                (resp: PostInterface) => {
                    this.post = resp;
                }, () => {
                    console.log('error');
                });
    }

}
