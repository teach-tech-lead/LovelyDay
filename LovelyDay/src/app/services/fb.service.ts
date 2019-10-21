import { Injectable } from '@angular/core';
import { AngularFireLiteAuth, AngularFireLiteFirestore } from '@angularfire-lite';
import { first, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FbService {

  constructor(public auth: AngularFireLiteAuth, public fs: AngularFireLiteFirestore) { }
}

