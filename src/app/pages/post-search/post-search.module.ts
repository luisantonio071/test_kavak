import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostSearchComponent} from './post-search.component';
import {PostSearchRoutingModule} from './post-search-routing.module';

@NgModule({
    declarations: [PostSearchComponent],
    imports: [
        CommonModule,
        PostSearchRoutingModule
    ]
})
export class PostSearchModule {
}
