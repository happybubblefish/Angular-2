import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'auction-stars',
    templateUrl: 'app/components/stars/stars.html',
    styles: [ ` .starrating { color: #17581; } ` ]
})
export default class StarsComponent{
    @Input() count: number = 5;
    @Input() rating: number = 0;
    stars: boolean[] = [];

    ngOnInit() {
        for(let i = 1; i < this.count; i++) {
            this.stars.push(i > this.rating);
        }
    }
}