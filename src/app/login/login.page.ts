import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { async } from 'q';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    username: string;  '';
    password: string;  '';

constructor(public afAuth: AngularFireAuth, public router: Router) { }

  ngOnInit() { }

    async login() {
    const { username, password } = this;
    try {
    // kind of a hack.
    const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@codedamn.com', password);
}   catch (err) {
    console.dir(err);


    this.router.navigate(['/members/tabs/aboutme']);

  }
}
}
