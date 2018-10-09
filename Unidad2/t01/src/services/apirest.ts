import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class ApiRest {
    //private http:any;
    public users: any;

    constructor(private http: Http) {

    }

    getUsers(): void {
        this.http.get("http://127.0.0.1:8085/user.json")
            .subscribe(
                //function (rest) {
                    (res) => { //Todo Ok
                    this.users = res.json();
                    console.log(this.users);
                },
                function (err) { //error 
                    console.log(err);
                }
            );
    }
}