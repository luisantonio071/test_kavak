import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {TitleCasePipe} from '@angular/common';
import {PostInterface} from '../interfaces/postInterface';

@Injectable({
    providedIn: 'root'
})
export class PlaceholderService {

    protected urlapi = 'https://jsonplaceholder.typicode.com/posts';

    constructor(protected http: HttpClient,
                private tcp: TitleCasePipe) {
    }

    getPosts(term?: string) {
        return this.http.get<PostInterface[]>(this.urlapi)
            .pipe(
                map((data) => {

                    for (const p of data) {
                        p.title = this.tcp.transform(p.title);
                    }

                    if (term) {
                        data = data.filter(x => x.title.toLowerCase() === term.toLowerCase());
                    }

                    return data;
                })
            );
    }

    getPost(id: number) {
        return this.http.get(`${this.urlapi}/${id}`)
            .toPromise();
    }
}
