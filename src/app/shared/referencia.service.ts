import { Injectable } from '@angular/core';
import { Referencia } from '../shared/Referencia';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class ReferenciaService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}
  // Create
  createBooking(refe: Referencia) {
    return this.bookingListRef.push({
      titulo: refe.titulo,
      autores: refe.autores,
      tipo: refe.tipo,
      eventorevista: refe.eventorevista,
      doi: refe.doi,
      ano: refe.ano,
    })
  }
  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/referencia/' + id);
    return this.bookingRef;
  }
  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/referencia');
    return this.bookingListRef;
  }
  // Update
  updateBooking(id, refe: Referencia) {
    return this.bookingRef.update({
      titulo: refe.titulo,
      autores: refe.autores,
      tipo: refe.tipo,
      eventorevista: refe.eventorevista,
      doi: refe.doi,
      ano: refe.ano,
    })
  }
  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/referencia/' + id);
    this.bookingRef.remove();
  }
}
