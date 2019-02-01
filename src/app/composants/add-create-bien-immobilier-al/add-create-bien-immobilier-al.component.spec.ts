import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCreateBienImmobilierALComponent } from './add-create-bien-immobilier-al.component';

describe('AddCreateBienImmobilierALComponent', () => {
  let component: AddCreateBienImmobilierALComponent;
  let fixture: ComponentFixture<AddCreateBienImmobilierALComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCreateBienImmobilierALComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCreateBienImmobilierALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
