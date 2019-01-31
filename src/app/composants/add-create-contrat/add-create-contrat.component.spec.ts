import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCreateContratComponent } from './add-create-contrat.component';

describe('AddCreateContratComponent', () => {
  let component: AddCreateContratComponent;
  let fixture: ComponentFixture<AddCreateContratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCreateContratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCreateContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
