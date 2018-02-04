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
            { id: 1, name: 'auris', transmission: 'auto' },
            { id: 2, name: 'yaris', transmission: 'manual' },
            { id: 3, name: 'avensis', transmission: 'auto' }
        ];
        return Observable.of(model);
    }
}