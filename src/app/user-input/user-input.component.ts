import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvetmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvetmentInput>();

  enteredInitialInvestment = '0';
  enteredAnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  onSubmit(){
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment, 
      annualInvestment: +this.enteredAnualInvestment,
      expectedReturn: +this.enteredExpectedReturn,       
      duration: +this.enteredDuration
    });
  }
}
