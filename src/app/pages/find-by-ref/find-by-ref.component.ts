import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-find-by-ref',
  templateUrl: './find-by-ref.component.html',
  styleUrls: ['./find-by-ref.component.css']
})
export class FindByRefComponent {
  title = 'Find By Ref Component';
  ref: string = '';

  article : Article | undefined;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ref = params['ref'];
    });

    // You can use this.ref to fetch the article by reference from your API
    console.log('Article reference:', this.ref);

    this.http.get<Article>(`http://localhost:6488/api/article/${this.ref}`)
          .subscribe({
            next: (data) => {
              this.article = data;
              console.log(this.article);
            },
            error: (error) => {
              console.error('There was a problem with the fetch operation:', error);
            }
          });
      }

  }

