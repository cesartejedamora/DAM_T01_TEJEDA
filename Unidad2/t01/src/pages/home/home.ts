import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OtherPage } from "../otherPage/otherPage";
import { ApiRest } from "../../services/apirest";
import { UserPage } from '../userPage/userPage';
import { AdminPage } from '../adminPage/adminPage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private user:string;
  private password:string;

  private credentials = {
    user:'',
    password:''
  };

  constructor(public navCtrl: NavController, public apirest:ApiRest) {
    //this.credentials.user="Israel";
    //this.credentials.password ="12345";
    this.apirest.getUsers();
  }

  goToAdminPage(): void {
    console.log('Ir hacia otra página');
    console.log(this.credentials.user);
    console.log(this.credentials.password);
    //alert(this.credentials.user+";"+this.credentials.password);
    if(this.credentials.user==='admin'&&
    this.credentials.password==='admin'
    ) {
      alert("Tipo de usuario: Administrador");
      this.navCtrl.push(AdminPage);
    }
    else if(this.credentials.user==='Cesar'&&
    this.credentials.password==='12345') {
      alert("Tipo de Usuario: Usuario normal");
      this.navCtrl.push(UserPage);

    } else if(this.credentials.user==='Tejeda'&&
    this.credentials.password==='12345') {
      alert("Tipo de Usuario: Usuario normal")
      this.navCtrl.push(UserPage);
    } else {
      alert("El usuario no está registrado")
    }
    
    //alert(JSON.stringify(this.apirest.users));
  }

  goToUserPage(): void {
    console.log('Ir hacia otra página');
    console.log(this.credentials.user);
    console.log(this.credentials.password);
    //alert(this.credentials.user+";"+this.credentials.password);
    if(this.credentials.user==='admin'&&
    this.credentials.password==='admin'
    ) {
      alert("válido");
      this.navCtrl.push(UserPage);
    }
    else
      alert("inválido")
    
    alert(JSON.stringify(this.apirest.users));
  }

  ionViewDidLoad() {
    console.log('Enter on Page');
  }

}