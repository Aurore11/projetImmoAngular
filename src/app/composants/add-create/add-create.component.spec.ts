import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCreateComponent } from './add-create.component';

describe('AddCreateComponent', () => {
  let component: AddCreateComponent;
  let fixture: ComponentFixture<AddCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
