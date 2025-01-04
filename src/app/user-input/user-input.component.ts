import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = '0';
  enteredAnualInvestment = '0';
  enteredExpectedReturn = '0';
  enteredDuration = '0';

  onSubmit(){
    console.log("Submited");
    console.log(this.enteredInitialInvestment);
    console.log(this.enteredAnualInvestment);
  }
}
