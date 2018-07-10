import { SERVICE_HOST } from './../../../app.constant';
import { HttpService } from './../../../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  host: string;
  response: any;
  sessionResponse: any;

  constructor(private httpService: HttpService) {
    this.host = SERVICE_HOST;
    this.loadTableData();
  }

  ngOnInit() {

  }

  loadTableData(): void {
    this.httpService.get(this.host + '/api/getMindDrive/trips/' + '761eb5e07a530cf93d5b9ef4ab391eb6').subscribe(
      data => { this.response = data; },
      error => { console.log(error); }
    );
  }

  getdetailsBySessionId(sessionId: string): void {
    this.httpService.get(this.host + '/api/getMindDrive/trips/session/' + sessionId).subscribe(
      data => { this.sessionResponse = data; console.log(this.sessionResponse); },
      error => { console.log(error); }
    );
  }
}
