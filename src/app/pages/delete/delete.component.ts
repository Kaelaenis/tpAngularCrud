import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  title = 'Delete Component';
  message : string;
  id : number;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.http.delete(`http://localhost:6488/api/article/${this.id}`)
      .subscribe({
        next: (data) => {
          this.message = 'Article deleted successfully';
        },
        error: (error) => {
          this.message = 'There was a problem with the delete operation: ' + error.message;
        }
      });
  }
}
