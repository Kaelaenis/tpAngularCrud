import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-find-allv2',
  templateUrl: './find-allv2.component.html',
  styleUrls: ['./find-allv2.component.css']
})
export class FindAllv2Component {
  title = 'Liste des articles - v2';

  articles = Array<Article>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Article[]>("http://localhost:6488/api/article")
      .subscribe({
        next: (data) => {
          this.articles = data;
          console.log(this.articles);
        },
        error: (error) => {
          console.error('There was a problem with the fetch operation:', error);
        }
      });
    }
}
