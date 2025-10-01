import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SrvArticleService {

  constructor(private http: HttpClient) { }
  
    getListe() {
      return this.http.get("http://localhost:6488/api/article");
    }

    post(data) {

    const body = JSON.stringify(data);

    this.http.post("http://localhost:6488/api/article", body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).
      subscribe(response => {

        console.log("crud service post OK");

      });


  }
}
