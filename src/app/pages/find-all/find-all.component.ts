import { Component } from '@angular/core';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-find-all',
  templateUrl: './find-all.component.html',
  styleUrls: ['./find-all.component.css']
})
export class FindAllComponent {
  title = 'Liste des articles';

  articles: Article[] = [];

  ngOnInit(): void {
    fetch("http://localhost:6488/api/article")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json()
        .then(data => {
          this.articles = data;
          console.log(this.articles);
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        })
        .finally(() => {
          console.log('Fetch attempt finished.');
        });
      }
    );
  }
}
