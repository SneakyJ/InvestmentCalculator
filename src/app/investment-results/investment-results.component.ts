import { Component, inject, computed } from '@angular/core';
import { InvestmentService } from '../investement.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

  results = computed(()=> this.investmentService.resultsData());
  // results =  this.investmentService.resultsData.asReadonly();
}
