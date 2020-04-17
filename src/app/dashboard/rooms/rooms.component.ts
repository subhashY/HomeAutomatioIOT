import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  lightCardColor = "col card m-2 p-3";
  lightImageColor = "card mt-1";
  light2ImageColor = "card mt-1";
  spinFan = "card mt-1"
  laptopColor = "card mt-1"
  laptopCardColor = "col card m-2 p-3";
  light2CardColor = "col card m-2 p-3";
  fanCardColor = "col card m-2 p-3";
  light1Status = "OFF";
  laptopStatus = "OFF";
  light2Status = "OFF";
  acStatus = "OFF";

  constructor(private service: DashboardService) { }

  ngOnInit() {

    this.service.SendValue.subscribe(data=>{
      console.log(data);
      if(data != ""){
        if(data.item == 'Light 1'){
          return this.toggleLight1(data.value);
        }else if(data.item == 'Light 2'){
          return this.toggleLight2(data.value);
        }else if(data.item == 'AC'){
          return this.toggleAc(data.value);
        }else if(data.item == 'Laptop'){
          return this.laptopToggle(data.value);
        }
      }
    })
  }


  toggleLight1(val){
    if(val){
      this.lightCardColor = "col card m-2 p-3 light-Card-color";
      this.lightImageColor = "card mt-1 light-image-color";
      this.light1Status = "ON";
    }else{
      this.lightCardColor = "col card m-2 p-3";
      this.lightImageColor = "card mt-1";
      this.light1Status = "OFF";
    }
   
  }
  toggleLight2(val){
    if(val){
      this.light2CardColor = "col card m-2 p-3 light-Card-color";
      this.light2ImageColor = "card mt-1 light-image-color";
      this.light2Status = "ON";
    }else{
      this.light2CardColor = "col card m-2 p-3";
      this.light2ImageColor = "card mt-1";
      this.light2Status = "OFF";
    }
  }


  toggleAc(val){
    if(val){
      // this.lightCardColor = "col card m-2 p-3 light-Card-color";
      this.spinFan = "mt-1 running";
      this.acStatus = "ON";
    }else{
      // this.lightCardColor = "col card m-2 p-3";
      this.spinFan = "card mt-1";
      this.acStatus = "OFF";
    }
    
  }

  laptopToggle(val){
    if(val){
      this.laptopCardColor = "col card m-2 p-3 light-Card-color";
      this.laptopColor = "card mt-1 laptop-color";
      this.laptopStatus = "ON";
    }else{
      this.laptopCardColor = "col card m-2 p-3";
      this.laptopColor = "card mt-1";
      this.laptopStatus = "OFF";
    }
    
  }




}
