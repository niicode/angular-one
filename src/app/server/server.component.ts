import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverStatus:string = "offline";
  allowAccess:boolean = false;
  status="";
  value = "";
  onClick():Boolean {
    if (this.allowAccess) {
      return this.allowAccess = false;
    }
    return this.allowAccess = true;
  }
  getStatus():string {
    if (this.allowAccess) {
      return this.status = "Online"
    }
    return this.status= "Offline"
  }

  handleServerChange(event: Event) {
    this.value = (<HTMLInputElement>event.target).value
  }
  constructor() {

   }

  ngOnInit(): void {
  }

}
