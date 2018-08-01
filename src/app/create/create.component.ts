import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Http,Response} from '@angular/http';
import { ListComponentComponent } from '../list-component/list-component.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})



export class CreateComponent{

  rForm: FormGroup;
  id:string = '';
  description:string = '';
  title:string = '';

  post:any;                     // A property for our submitted form
  posts: FirebaseListObservable<any[]>;



/*   constructor(private http:Http,private af: AngularFireDatabase) {
     this.posts = af.list('https://fir-crud-20322.firebaseio.com/array/posts');
   }
    addPost(length){
      let len = parseInt(length) + 1;
      this.posts.push({
           id: len,
           description: this.post.description,
           title: this.post.title
         });
      }*/

      constructor(private fb: FormBuilder, private http:Http,private af: AngularFireDatabase,  private router: Router,) {
        this.rForm = fb.group({
          // 'id' : '',
           'title' : [null, Validators.required],
           'description' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],

         });
          this.posts = af.list('https://fir-crud-20322.firebaseio.com/array/posts');
        }
         addPost(post,length){
        //  alert("form data" + value +JSON.stringify(post));
          let len = parseInt(length) + 1;
          this.posts.push({
               id: len,
               description: post.description,
               title: post.title
             });
            this.router.navigate(['list']);
           }

}
