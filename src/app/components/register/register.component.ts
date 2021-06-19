import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateOutcome } from 'src/app/models/CreateOutcome';
import { OutcomeService } from 'src/app/services/outcome.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  outcomeForm!: NgForm;
  outcomeData!: CreateOutcome
  constructor(private outcomeService: OutcomeService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.outcomeForm.form.valid) {
      this.addOutcome();
    } else {
      console.log('Invalid Data');
    }
  }
  addOutcome() {
    const newOutcome = {amount: this.outcomeData.amount, detail: this.outcomeData.detail};
    this.outcomeService.saveOutcomes(newOutcome).subscribe
    this.router.navigate(['/outcomes']).then(() => null);
  }
}
