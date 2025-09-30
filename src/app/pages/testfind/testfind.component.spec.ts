import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestfindComponent } from './testfind.component';

describe('TestfindComponent', () => {
  let component: TestfindComponent;
  let fixture: ComponentFixture<TestfindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestfindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestfindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
