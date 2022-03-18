import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { ReferenciaService } from './../shared/referencia.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {
  bookingForm: FormGroup;
  constructor(
    private refService: ReferenciaService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.bookingForm = this.fb.group({
      titulo: [''],
      autores: [''],
      tipo: [''],
      eventorevista: [''],
      doi: [''],
      ano: ['']
    })
  }
  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;
    } else {
      this.refService.createBooking(this.bookingForm.value).then(res => {
        console.log(res)
        this.bookingForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    }
  }
}