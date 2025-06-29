import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investement.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = signal('0');
  enteredAnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  constructor(private investmentService: InvestmentService){}

  onSubmit(){
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(), 
      annualInvestment: +this.enteredAnualInvestment(),
      expectedReturn: +this.enteredExpectedReturn(),       
      duration: +this.enteredDuration()
    });
    this.enteredInitialInvestment.set('0');
    this.enteredAnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
  }
}
