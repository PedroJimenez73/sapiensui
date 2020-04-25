import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

    @ViewChild('burger', {static: true}) burgerRef: ElementRef;
    @ViewChild('side', {static: true}) sideRef: ElementRef;
    @ViewChild('overlay', {static: true}) overlayRef: ElementRef;

    constructor() { }

    ngOnInit() {
    }

    toggleMenu() {
        if (this.burgerRef.nativeElement.classList.value === 'burger') {
            this.burgerRef.nativeElement.classList.add('open');
            this.sideRef.nativeElement.classList.add('open');
            this.overlayRef.nativeElement.classList.add('open');
        } else {
            this.burgerRef.nativeElement.classList.remove('open');
            this.sideRef.nativeElement.classList.remove('open');
            this.overlayRef.nativeElement.classList.remove('open');
        }
    }

}
