import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CarModel } from 'models_car.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CarsService {

    constructor(private http: Http) {
    }

    getCars() {
        //we return a fake model (no http call). 
        let model: Array<CarModel> = [
            { id: 1, name: 'civic', color: 'blue' },
            { id: 2, name: 'accord', color: 'green' },
            { id: 3, name: 'brio', color: 'white' }
        ];
        return Observable.of(model);
    }
}