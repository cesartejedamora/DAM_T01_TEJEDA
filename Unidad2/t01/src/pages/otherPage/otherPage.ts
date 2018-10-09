import { Component } from "@angular/core";
import { NavController} from "ionic-angular";
import { PlacesRest } from "../../services/placesrest";

@Component({
    selector:'other-page',
    templateUrl:'otherPage.html'
})
export class OtherPage {
    constructor(public navCtrl: NavController, 
        public placesrest:PlacesRest) {
            this.placesrest.getPlaces();
        }

    goBack():void {
        this.navCtrl.pop();
    }

    onPageWillEnter() {
        console.log('Enter on Page');
    }
}