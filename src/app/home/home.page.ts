import { Component, OnInit } from '@angular/core';
import { Referencia } from '../shared/Referencia';
import { ReferenciaService } from './../shared/referencia.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  Bookings = [];
  constructor(
    private refService: ReferenciaService
  ) { }

  ngOnInit() {
    this.fetchBookings();
    let bookingRes = this.refService.getBookingList();
    bookingRes.snapshotChanges().subscribe(res => {
      this.Bookings = [];
      res.forEach(item => {
        let x = item.payload.toJSON();
        x['$idreferencia'] = item.key;
        this.Bookings.push(x as Referencia);
      })
    })
  }
  fetchBookings() {
    this.refService.getBookingList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }
  deleteBooking(id) {
    console.log(id)
    if (window.confirm('¿Seguro?')) {
      this.refService.deleteBooking(id)
    }
  }
}
