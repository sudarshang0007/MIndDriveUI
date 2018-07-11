import { Component, OnInit } from '@angular/core';
import { VehicleProfile } from './vehicle-profile';
// import { HttpService } from '../services/http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vehicle-profile',
  templateUrl: './vehicle-profile.component.html',
  styleUrls: ['./vehicle-profile.component.css']
})
export class VehicleProfileComponent implements OnInit {

  selected: string;
  average: any;
  registrationIds: string[] = [];
  vehicleprofile: VehicleProfile;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  getData(): any {
    this.http.get<string[]>('https://minddrive.cfapps.io/api/getMindDrive/registrationId').subscribe(
      response => {
        this.registrationIds = response;
        console.log(this.registrationIds);
      },
      error => {
        console.log('error ' + error);
      }
    );
  }


  getVehicleProfile(): any {
    this.http.get<VehicleProfile>('https://minddrive.cfapps.io/api/getMindDrive/details/' + this.selected).subscribe(
      response => {
        this.vehicleprofile = response;
        this.getAvgOfVehicle();
      },
      error => {
        console.log('error ' + error);
      }
    );

  }


  getAvgOfVehicle(): any {
    this.http.get('https://minddrive.cfapps.io//api/getMindDrive/avgData/' + this.vehicleprofile.pid).subscribe(
      response => {
        console.log(response);
        this.average = response;
      },
      error => {
        console.log('error ' + error);
      }
    );
  }

  onSelect() {
    this.getVehicleProfile();
  }
}
