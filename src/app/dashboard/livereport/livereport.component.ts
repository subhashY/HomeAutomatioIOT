import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-livereport',
  templateUrl: './livereport.component.html',
  styleUrls: ['./livereport.component.css']
})
export class LivereportComponent implements OnInit {
  light1ElecConsumption  = 0;
  light2ElecConsumption = 0;
  laptopElecConsumption = 0;
  acElecConsumption = 0;
  light1Inetval;
  light2Inetval;
  acInetval;
  laptopInetval;

  constructor(private service: DashboardService) { }

  ngOnInit() {
    this.service.SendValue.subscribe(data=>{
      console.log(data);
      if(data != ""){
        if(data.item == 'Light 1'){
          return this.light1PowerConsumption(data.value);
        }else if(data.item == 'Light 2'){
          return this.light2PowerConsumption(data.value);
        }else if(data.item == 'AC'){
          return this.acPowerConsumption(data.value);
        }else if(data.item == 'Laptop'){
          return this.laptopPowerConsumption(data.value);
        }
      }
    })
  }

  light1PowerConsumption(val){
    if(val){
      return this.light1Inetval = setInterval(()=>{
         this.light1ElecConsumption += 0.6
         return this.light1ElecConsumption = Number(this.light1ElecConsumption.toPrecision(2));
      }, 5000);
    }
    return clearInterval(this.light1Inetval);
  }
  light2PowerConsumption(val){
    if(val){
      return this.light2Inetval = setInterval(()=>{
        this.light2ElecConsumption += 0.6;
        return this.light2ElecConsumption = Number(this.light2ElecConsumption.toPrecision(2));
      }, 5000);
    }
    return clearInterval(this.light2Inetval);
  }
  acPowerConsumption(val){
    if(val){
      return this.acInetval = setInterval(()=>{
        return this.acElecConsumption += 1 
      }, 3000);
    }
    return clearInterval(this.acInetval);
  }
  laptopPowerConsumption(val){
    if(val){
      return this.laptopInetval = setInterval(()=>{
        this.laptopElecConsumption += 0.5
        return this.laptopElecConsumption = Number(this.laptopElecConsumption.toPrecision(2));

      }, 3000);
    }
    return clearInterval(this.laptopInetval);
  }

}
