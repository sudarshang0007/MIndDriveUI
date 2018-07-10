import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css'],
})
export class AnalysisComponent implements OnInit {

  loadAPI: Promise<any>;

  constructor() {
    const head = document.getElementById('head');
    const script = document.createElement('script');
    script.setAttribute('src', './assets/js/main.js');
    head.appendChild(script);
  }

  ngOnInit() {
  }

}
