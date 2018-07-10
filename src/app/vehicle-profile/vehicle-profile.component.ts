import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
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
  registrationIds: string[] = [];
  vehicleprofile:VehicleProfile;
  //selectedVehicleProfile: VehicleProfile =new VehicleProfile("761eb5e07a530cf93d5b9ef4ab391eb6","Smith","2314567892","Jazz","Honda","2016","2","Petrol","NO","NO","MH14EY1438");
  constructor(private http: HttpClient) { }

  ngOnInit() {
    //this.registrationIds=<any>this.getData();
    this.getData();
  }

  getData(): any {
    this.http.get<string[]>("https://minddrive.cfapps.io/api/getMindDrive/registrationId").subscribe(

      response => {
        console.log(response);

        this.registrationIds = response;

        console.log(this.registrationIds);
      },
      error => {
        console.log("error " + error);
      }
    )
  }
  getVehicleProfile(): any{
    this.http.get<VehicleProfile>("https://minddrive.cfapps.io/api/getMindDrive/details/"+this.selected).subscribe(

      response => {
        console.log(response);

        this.vehicleprofile = response;

        console.log(this.vehicleprofile);
      },
      error => {
        console.log("error " + error);
      }
    )
  }
  onSelect() {
    this.getVehicleProfile();
  }
}
