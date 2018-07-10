import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  url = 'http://pl1inpun0428pc:5000/api/vehicle';
  constructor(
    private http: HttpService) {

  }

  ngOnInit() {
  }


  fetchVehicleLiveData(): void {
  }

}
