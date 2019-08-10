import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostSearchComponent} from './post-search.component';
import {PostResolver} from '../../resolvers/post.resolver';


const routes: Routes = [
    {
        path: '',
        component: PostSearchComponent,
        resolve: {post: PostResolver}
    },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)],
    providers: [
        PostResolver
    ]
})
export class PostSearchRoutingModule {
}
