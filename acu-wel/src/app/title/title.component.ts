import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-title',
    styleUrls: ['./title.component.css'],
    template: `
      <h1 style="border-bottom:1px solid #5e4028">
        {{ title[0] }} <br> {{ title[1] }}
      </h1>
    `,
})
export class TitleComponent implements OnInit {
    // TODO: Figure a way to not store the title as an array, but a string.
    title = ['Acupuncture and Functional Medicine', 'of Orlando and Winter Park'];

    constructor() {

    }

    ngOnInit() {
    }

}
