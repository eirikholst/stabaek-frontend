import {Component, Inject} from "@angular/core";
import {Router} from "@angular/router";
import {DOCUMENT} from "@angular/platform-browser";

@Component({
  selector: 'fixtureOverview',
  templateUrl: 'fixtureOverview.component.html',
  styleUrls: [
    '../styles/app.component.css'
  ],
})

export class FixtureOverviewComponent {

  constructor(@Inject(DOCUMENT) private document: any, private router: Router){

    //No outlets set? -> Set outlet.
    if(this.document.location.href.indexOf("fixtureListOutlet") >= 0)
      return;
    this.router.navigate(['./fixtures',{outlets: {'fixtureListOutlet': ['fixtureList'], 'fixtureInfoOutlet': ['none']}}]);
  }

}
