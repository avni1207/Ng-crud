//import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private af: AngularFireDatabase) {
    }
  title = 'My app';
}
