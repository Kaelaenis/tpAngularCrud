import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByRefComponent } from './find-by-ref.component';

describe('FindByRefComponent', () => {
  let component: FindByRefComponent;
  let fixture: ComponentFixture<FindByRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindByRefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindByRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
