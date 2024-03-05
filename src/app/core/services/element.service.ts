import { Injectable } from '@angular/core';
import { IElement } from 'src/app/shared/models/element.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { API_URL } from '../../core/util/constant';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class ElementService {
    constructor(private http: HttpClient) {}

    getElements() : Observable<any>{
      return this.http.get(`${API_URL}/api/v1/Forecast/GetElements`);
    }
}
