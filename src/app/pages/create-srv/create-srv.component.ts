import { Component } from '@angular/core';
import { SrvArticleService } from 'src/app/services/srv-article.service';

@Component({
  selector: 'app-create-srv',
  templateUrl: './create-srv.component.html',
  styleUrls: ['./create-srv.component.css']
})
export class CreateSrvComponent {
  article = { ref: 0, marque: '', prix: 0 };
  message: string;

  constructor(private srvArticle: SrvArticleService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.srvArticle.post(this.article);
    this.message = 'Article created successfully';
  }
}
