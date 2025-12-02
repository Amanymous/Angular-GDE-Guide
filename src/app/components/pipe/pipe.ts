import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { catchError, filter, from, of } from 'rxjs';

@Component({
  selector: 'app-pipe',
  imports: [HttpClientModule],
  templateUrl: './pipe.html',
  styleUrl: './pipe.css',
})
export class Pipe {
  // Observables themselves don’t have methods like map, filter,
  // catchError directly; you use operators via pipe.
  private http = inject(HttpClient);
  number = from([1, 2, 3, 4, 5]).pipe(
    filter((n) => n % 2 === 0) // only even numbers
  );

  ngOnInit() {
    this.number.subscribe((val) => console.log('val:', val));
    this.getData();
  }

  getData() {
    this.http
      .get<any[]>('https://api.example.com/data') // specify the expected type
      .pipe(
        catchError((err) => {
          console.error('Error occurred:', err);
          return of([]); // fallback empty array
        })
      )
      .subscribe((data) => console.log('API response:', data));
  }
}
