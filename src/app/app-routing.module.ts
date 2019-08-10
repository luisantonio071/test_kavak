import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PostsComponent} from './pages/posts/posts.component';

const routes: Routes = [
    {
        path: '',
        component: PostsComponent
    },
    {
        path: ':id',
        loadChildren: '../app/pages/post-detail/post-detail.module#PostDetailModule'
    },
    {
        path: 'busqueda/:palabra',
        loadChildren: '../app/pages/post-search/post-search.module#PostSearchModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
