import { Component, OnInit } from '@angular/core';
import {
    state,
    style,
    transition,
    animate,
    trigger,
} from '@angular/animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [
        trigger('enlarge', [
            state('start', style({ height: '150px' })),
            state('end', style({  height: '250px', borderRadius: '250px' })),
            transition('start => end', [animate('0.1s 0.1s')]),
            transition('end => start', [animate('0.1s 0.5s')]),
        ]),
    ],
})
export class HomeComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    isEnlarge: boolean = false;
    buttonName: string = 'Enlarge';
    triggerFunction() {
        this.isEnlarge = !this.isEnlarge;
        if (this.isEnlarge) {
            this.buttonName = 'Shrink';
        } else {
            this.buttonName = 'Enlarge';
        }
    }
}
