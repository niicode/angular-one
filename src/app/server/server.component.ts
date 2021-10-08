import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent implements OnInit {
  userName:string = "";
  Server:string = "";
  hasName:boolean = false;
  serverStatus:string = "offline"
  serverList:string[] = ["TestServer", "PilotServer"]

  onCreated():void {
    this.hasName = true;
    this.Server = this.userName;
    this.serverList.push(this.serverStatus)
  }



  getColor(){
    return this.serverStatus === "offline" ? "red" : "grey";
  }
  constructor() {
    this.serverStatus =  Math.random() > 0.5 ? "online" : "offline"
   }

  ngOnInit(): void {
  }

}
