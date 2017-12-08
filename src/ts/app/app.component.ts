import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template : require('html-loader!./app.component.html')
})
export class AppComponent {
    title = 'Angular5 Rocks!!!';
}