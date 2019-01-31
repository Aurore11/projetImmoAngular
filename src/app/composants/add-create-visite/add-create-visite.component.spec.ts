import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCreateVisiteComponent } from './add-create-visite.component';

describe('AddCreateVisiteComponent', () => {
  let component: AddCreateVisiteComponent;
  let fixture: ComponentFixture<AddCreateVisiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCreateVisiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCreateVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
