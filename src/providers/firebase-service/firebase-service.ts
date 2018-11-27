import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';

/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {

  

  constructor(public db: AngularFireDatabase) {
    console.log('Hello FirebaseServiceProvider Provider');
  }

  getAll()
  {
    //return this.db.list('courses').valueChanges();
    return this.db.list('courses').snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        })))
      );
  }

  save(course: any)
  {
    this.db.list('courses')
      .push(course)
      .then(r => console.log(r));
  }

  update(course: any)
  {
    this.db.list('courses').update(course.key, course).then(r => console.log(r));
  }

  delete(course: any)
  {
    this.db.list('courses').remove(course.key).then(r => console.log(r));
  }

}
