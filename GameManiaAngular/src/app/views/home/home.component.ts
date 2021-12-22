import { Component, OnInit } from '@angular/core';
import { EmailNewsletter } from 'src/app/models/email-newsletter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  emailnewsletterModel = new EmailNewsletter("")

  onSubmit() {
    console.log(this.emailnewsletterModel)
  }

}
