import { Component, OnInit } from '@angular/core';
import { CVPortfolioService } from '../cv-portfolio.service';
import { CVPortfolio } from '../cv-portfolio.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
edit(_t2: any) {
throw new Error('Method not implemented.');
}
  items: CVPortfolio[] = [];

  constructor(private service: CVPortfolioService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((items) => (this.items = items));
  }

  delete(id: number): void {
    this.service.delete(id);
    this.ngOnInit(); // Recarga los datos
  }
}
