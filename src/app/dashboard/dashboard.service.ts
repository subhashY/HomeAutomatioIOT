import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class DashboardService {
    SendValue = new BehaviorSubject<any>("");

    constructor(){}

}