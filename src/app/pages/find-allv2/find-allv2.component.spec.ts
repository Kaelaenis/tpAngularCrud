import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAllv2Component } from './find-allv2.component';

describe('FindAllv2Component', () => {
  let component: FindAllv2Component;
  let fixture: ComponentFixture<FindAllv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAllv2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindAllv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
