import {Component, ViewEncapsulation} from '@angular/core';
import {AppRestService} from '../service/app.rest.service';

@Component({
    selector: 'app-root',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'app.component.html',
    styleUrls: ['./styles/app.component.css'],
    providers: [AppRestService],
})
export class AppComponent {

    constructor(private appRestService: AppRestService) {
    }
}
