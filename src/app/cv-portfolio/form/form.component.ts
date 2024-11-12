import { Component, OnInit, Input } from '@angular/core';
import { CVPortfolioService } from '../cv-portfolio.service';
import { CVPortfolio } from '../cv-portfolio.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  @Input() item: CVPortfolio = {
    id: 0,
    title: '',
    description: '',
    date: new Date(),
  };

  constructor(private service: CVPortfolioService) {}

  ngOnInit(): void {}

  save(): void {
    if (this.item.id) {
      this.service.update(this.item);
    } else {
      this.service.create(this.item);
    }
  }
}
