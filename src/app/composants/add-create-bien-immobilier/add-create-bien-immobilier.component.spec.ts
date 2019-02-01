import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCreateBienImmobilierComponent } from './add-create-bien-immobilier.component';

describe('AddCreateBienImmobilierComponent', () => {
  let component: AddCreateBienImmobilierComponent;
  let fixture: ComponentFixture<AddCreateBienImmobilierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddCreateBienImmobilierComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCreateBienImmobilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
