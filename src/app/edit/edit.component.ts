import { AngularFireDatabase, FirebaseObjectObservable} from "angularfire2/database-deprecated";
import { Component, OnInit, Input} from '@angular/core';
import {Http,Response} from '@angular/http';
import { ListComponentComponent } from '../list-component/list-component.component';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent{

 post: FirebaseObjectObservable<any>;
 posts: FirebaseObjectObservable<any>;
 id: any = [];


  constructor(private http:Http,private af: AngularFireDatabase, private route: ActivatedRoute,
  private router: Router) {

        this.route.params.subscribe(params => {
        let id = params['paramKey'];
        this.af.object('https://fir-crud-20322.firebaseio.com/array/posts/'+id)
            .subscribe(course => {
              this.post = course;
            });

      });

  }

 editPost(title,desc,key){

  const itemRef = this.af.object('https://fir-crud-20322.firebaseio.com/array/posts/'+key);
  itemRef.update({ title: title, description:desc});

   }
}
