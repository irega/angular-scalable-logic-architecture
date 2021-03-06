import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CarModel } from 'src_app_models_car.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CarsService {

    constructor(private http: Http) {
    }

    getCars() {
        // we return a fake model (no http call).
        const model: Array<CarModel> = [
            { id: 1, name: 'auris', transmission: 'auto' },
            { id: 2, name: 'yaris', transmission: 'manual' },
            { id: 3, name: 'avensis', transmission: 'auto' }
        ];
        return Observable.of(model);
    }
}
