import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settingLlist;

  constructor(private service: DashboardService) { }

  ngOnInit() {
    this.settingLlist = ['Light 1', 'Light 2', 'Laptop', 'AC']

  }

  changeListen(val, checked){
    console.log(val, checked);
    let value = {item :val, value:checked};
    this.service.SendValue.next(value)
  }

}
