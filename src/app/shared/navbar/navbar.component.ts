import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styles: []
})
export class NavbarComponent implements OnInit {

    @ViewChild('input_search') input: ElementRef;


    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    postSearch() {
        const term = this.input.nativeElement.value;

        if (term === '') {
            return;
        }

        this.router.navigate(['/busqueda', term]);
    }

}
