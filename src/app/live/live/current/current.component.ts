import { SERVICE_HOST } from './../../../app.constant';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit, OnDestroy {

  host: string;
  intervalManager: any;
  currentData: any;


  constructor(private http: HttpService) {
    this.host = SERVICE_HOST;
    // this.intervalManager = setInterval(() => { this.fetchVehicleLiveData(); }, 1000);
    this.fetchVehicleLiveData();

    const head = document.getElementById('head');
    const script = document.createElement('script');
    script.setAttribute('src', './assets/js/main.js');
    const script1 = document.createElement('script');
    script.setAttribute('src', './assets/js/loaddata.js');
    head.appendChild(script);
    head.appendChild(script1);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalManager);
  }

  fetchVehicleLiveData(): void {
    setTimeout(() => {
      this.http.get(this.host + '/api/getMindDrive/data/761eb5e07a530cf93d5b9ef4ab391eb6').subscribe(
        response => {
          this.currentData = response;
          /*           this.currentData = {
                      'id': '1',
                      'session': '1531150644032',
                      'eml': '',
                      'pid': '761eb5e07a530cf93d5b9ef4ab391eb6',
                      'time': '1531150802048',
                      'gpsLongitude': '73.77326697',
                      'gpsLatitude': '18.569447',
                      'speed': '120',
                      'airFuelRatio': '29.399551',
                      'rpm': 1236.5,
                      'accZAxis': '0.612251',
                      'accYAxis': '0.68751806',
                      'accXAxis': '0.00836978',
                      'engCoolantTmp': 59.0,
                      'tripDistance': '0.29190361',
                      'baroPressure': '94.0',
                      'engLoad': 14.509804,
                      'sysVapPressure': '3999.75',
                      'fuelFlowratePerMinute': '39.507687',
                      'fuleRemaining': '49.861366',
                      'gpsBearing': '358.3',
                      'profileFuelName': null,
                      'profileFuelType': null,
                      'profileFuelCost': null,
                      'profileVe': null,
                      'profileWeight': null,
                      'currentPattern': 1,
                      'msensor': '-0.009685714'
                    }; */
        }, error => { console.log(error); }
      );
    }, 2000);
  }




}
