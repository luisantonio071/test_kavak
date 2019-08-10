import {Component, OnInit} from '@angular/core';
import {PlaceholderService} from '../../services/placeholder.service';
import {PostInterface} from '../../interfaces/postInterface';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styles: []
})
export class PostsComponent implements OnInit {
    private posts: Observable<PostInterface[]>;

    constructor(public ps: PlaceholderService) {
    }

    ngOnInit() {
        this.posts = this.ps.getPosts();
    }
}
