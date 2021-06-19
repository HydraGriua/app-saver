import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateOutcome } from '../models/CreateOutcome';
import { Outcome } from '../models/Outcome';

@Injectable({
  providedIn: 'root'
})
export class OutcomeService {

  constructor(private http:HttpClient) { }
  Url='https://app-saver-api.herokuapp.com/outcomes'

  getOutcomes(){
    return this.http.get<Outcome[]>(this.Url);
  };
  saveOutcomes(outcome:CreateOutcome){
    return this.http.post(this.Url,outcome);
  }
}
