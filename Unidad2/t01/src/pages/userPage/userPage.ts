import { Component } from "@angular/core";
import { NavController} from "ionic-angular";
import { DeportesRest } from "../../services/deportesrest";
import { ApiRest } from "../../services/apirest";

@Component({
    selector:'user-page',
    templateUrl:'userPage.html'
})
export class UserPage {
    private user:string;
  private password:string;

  private credentials = {
    user:'',
    password:''
  };

    constructor(public navCtrl: NavController, 
        public deportesrest:DeportesRest, public apirest:ApiRest) {
            this.deportesrest.getDeportes();
            
            this.apirest.getUsers();
        }

    goBack():void {
        this.navCtrl.pop();
    }

    onPageWillEnter() {
        console.log('Enter on Page');
    }
}