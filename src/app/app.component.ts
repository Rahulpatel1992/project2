import { Component } from '@angular/core';
import { ServerService } from './server.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = this.serverService.getAppName();
  servers = [];
  constructor(private serverService: ServerService) {}
  onAddServer(name: string,office:string,position:string,salary:number) {
    this.servers.push({
      name: name,
      id: this.generateId(),
      office: office,
      position:position,
      salary : salary,
    });
  
  }
  onSave() {
    this.serverService.storeServers(this.servers)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
  onGet() {
    this.serverService.getServers()
      .subscribe(
        (servers: any[]) => this.servers = servers,
        (error) => console.log(error)
      );
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}

