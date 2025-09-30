import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent {
  title = 'Insert Component';

  article = { ref: 999, marque: 'Final Fantasy', prix: 49 };

  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    this.http.post("http://localhost:6488/api/article", this.article, { headers: { 'Content-Type': 'application/json' } })
      .subscribe({
        next: (data) => {
          console.log('Article inserted successfully:', data);
        },
        error: (error) => {
          console.error('There was a problem with the insert operation:', error);
        }
      });
  }
}
