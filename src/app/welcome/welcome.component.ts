import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message:string;
  constructor(

    private data:DataService
  ) { }
public formData:any;
  ngOnInit() {
    this.formData = this.data.getData();
    // this.data.currentMessage.subscribe(message => this.message = message)
     console.log('22',this.formData);
  }

}
