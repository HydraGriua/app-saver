import { Component, OnInit } from '@angular/core';
import { Outcome } from 'src/app/models/Outcome';
import { OutcomeService } from 'src/app/services/outcome.service';

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.css']
})
export class OutcomeComponent implements OnInit {
  outcomes: Outcome[] = [];
  total:number =0;


  constructor(private outcomeService: OutcomeService) {
  }

  ngOnInit(): void {
    this.outcomeService.getOutcomes().subscribe(data => {
      this.outcomes=data;
      this.total = this.getTotal()
      //console.log(data);
    }, err =>{
      console.log(err);
    });
  }

  getTotal(): number{
    let t = 0;
    for (let outcome of this.outcomes) {
      t += outcome.amount;
    }
    return t;
  }

}
