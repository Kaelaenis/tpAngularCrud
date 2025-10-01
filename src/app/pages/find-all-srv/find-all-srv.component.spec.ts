import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAllSrvComponent } from './find-all-srv.component';

describe('FindAllSrvComponent', () => {
  let component: FindAllSrvComponent;
  let fixture: ComponentFixture<FindAllSrvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAllSrvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindAllSrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
