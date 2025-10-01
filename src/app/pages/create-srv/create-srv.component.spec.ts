import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSrvComponent } from './create-srv.component';

describe('CreateSrvComponent', () => {
  let component: CreateSrvComponent;
  let fixture: ComponentFixture<CreateSrvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSrvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
