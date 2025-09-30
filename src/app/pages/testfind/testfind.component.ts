import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testfind',
  templateUrl: './testfind.component.html',
  styleUrls: ['./testfind.component.css']
})
export class TestfindComponent {
  title = 'Test Find Component';

  nom: string = '';
  prenom: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let full : string;
    this.route.params.subscribe(params => {
      full = params['full'];
    });
    [this.nom, this.prenom] = full.split('&');
  }
}
