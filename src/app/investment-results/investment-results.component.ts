import { Component, Input, input } from '@angular/core';
import { InvestmentInput } from "../investment-input.model";
import { CurrencyPipe } from "@angular/common";

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
//   result = input<{
//   year: number,
//   interest: number,
//   valueEndOfYear: number,
//   annualInvestment: number,
//   totalInterest: number,
//   totalAmountInvested: number
//   }>();


  @Input() results?: {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number
  }[];
}
