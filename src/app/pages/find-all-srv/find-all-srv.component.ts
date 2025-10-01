import { Component } from '@angular/core';
import { SrvArticleService } from 'src/app/services/srv-article.service';

@Component({
  selector: 'app-find-all-srv',
  templateUrl: './find-all-srv.component.html',
  styleUrls: ['./find-all-srv.component.css']
})
export class FindAllSrvComponent {
  articles : any;

  constructor(private srvArticle: SrvArticleService) { }

  ngOnInit(): void {
    this.srvArticle.getListe().subscribe(
      (response) => {
        this.articles = response;
        console.log(this.articles);
      }
    );
  }
}
