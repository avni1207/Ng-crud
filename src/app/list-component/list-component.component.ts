import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { Component, OnInit, Input} from '@angular/core';
import {Http,Response} from '@angular/http';
//import * as firebase from 'firebase/app';



@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent{

  post: any = [];
  posts: FirebaseListObservable<any[]>;

//  FBURL = "https://fir-crud-20322.firebaseio.com/array/posts";
  constructor(private http:Http,private af: AngularFireDatabase) {
     this.posts = af.list('https://fir-crud-20322.firebaseio.com/array/posts');
    // console.log("hii",this.post);
    }
    editlistPost(){

    }

    deletePost(id){
      this.posts.remove(id);
    }

}
