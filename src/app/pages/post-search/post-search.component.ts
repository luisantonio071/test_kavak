import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {PostInterface} from '../../interfaces/postInterface';

@Component({
    selector: 'app-post-search',
    templateUrl: './post-search.component.html',
    styles: []
})
export class PostSearchComponent implements OnInit {
    private posts;

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.posts = this.activatedRoute.snapshot.data;
    }

}
