import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCreateBienImmobilierAAComponent } from './add-create-bien-immobilier-aa.component';

describe('AddCreateBienImmobilierAAComponent', () => {
  let component: AddCreateBienImmobilierAAComponent;
  let fixture: ComponentFixture<AddCreateBienImmobilierAAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCreateBienImmobilierAAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCreateBienImmobilierAAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
