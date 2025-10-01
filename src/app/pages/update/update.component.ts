import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  id: number;
  message: string;
  article: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.init();
  }

  init(): void {
    this.http.get(`http://localhost:6488/api/article/${this.id}`)
      .subscribe(
        (response) => {
          this.article = response;
          console.log(this.article);
        }
      );
      this.init();
  }

  update(): void {
    const body = JSON.stringify(this.article);

    this.http.put(`http://localhost:6488/api/article/${this.id}`, body, { headers: { 'Content-Type': 'application/json' } })
      .subscribe({
        next: (data) => {
          this.message = 'Article updated successfully';
        },
        error: (error) => {
          this.message = 'There was a problem updating the article: ' + error.message;
        }
      });
  }
}
