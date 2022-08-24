import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  @Input() message = "";
  firstName = "";
  lastName = "";
  dateOfBirth = new Date();
  placeOfBirth = "";
  dateOfDeath = new Date();
  placeOfDeath = "";
  isAlive = true;

  ngOnInit(): void {
    console.info({ message: this.message });
    const split = this.message.split("~");
    console.info({ split });
    this.firstName = split[0];
    this.lastName = split[1];
    this.dateOfBirth = new Date(+split[2], +split[3], +split[4]);
    this.placeOfBirth = split[5];
    if (split.length > 6) {
      this.isAlive = false;
      this.dateOfDeath = new Date(+split[6], +split[7], +split[8]);
      this.placeOfDeath = split[9];
    }
  }

}
