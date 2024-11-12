import { Injectable } from '@angular/core';
import { CVPortfolio } from './cv-portfolio.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CVPortfolioService {
  private items: CVPortfolio[] = []; // Simulación de datos en memoria

  getAll(): Observable<CVPortfolio[]> {
    return of(this.items);
  }

  getById(id: number): Observable<CVPortfolio | undefined> {
    return of(this.items.find((item) => item.id === id));
  }

  create(item: CVPortfolio): void {
    this.items.push({ ...item, id: Date.now() });
  }

  update(item: CVPortfolio): void {
    const index = this.items.findIndex((i) => i.id === item.id);
    if (index !== -1) this.items[index] = item;
  }

  delete(id: number): void {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
