import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { ListComponentComponent } from './list-component/list-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CreateComponent } from './create/create.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { firebaseConfig } from '../environments/firebase.config';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponentComponent,
    HomeComponentComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
     {
       path: '',
       redirectTo: '/home',
       pathMatch: 'full'
     },
     {
       path: 'home',
       component: HomeComponentComponent
     },
     {
       path: 'create',
       component: CreateComponent
     },
     {
       path: 'edit',
       component: EditComponent
     },

     {
       path: 'list',
       component: ListComponentComponent
     },
   ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
