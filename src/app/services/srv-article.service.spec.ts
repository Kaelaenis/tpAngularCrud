import { TestBed } from '@angular/core/testing';

import { SrvArticleService } from './srv-article.service';

describe('SrvArticleService', () => {
  let service: SrvArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
