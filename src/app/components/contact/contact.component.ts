import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
/* import { env } from 'process';
import * as nodemailer from 'nodemailer'; */

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  asunto = new FormControl('');
  mensaje = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }

}
