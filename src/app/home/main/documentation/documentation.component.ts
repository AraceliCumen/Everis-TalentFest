import { Component } from '@angular/core';

@Component({
    selector: 'app-documentation',
    templateUrl: './documentation.component.html',
    styleUrls: ['./documentation.component.css']
})

export class DocumentationComponent {
    public title: string;

    constructor(){
        this.title = 'documentation';
    }

}