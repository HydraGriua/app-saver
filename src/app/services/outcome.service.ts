import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OutcomeService {

  constructor(private http:HttpClient) { }
  Url='https://app-saver-api.herokuapp.com/'

  getGastos(){};
  //TODO:ET 2
}
