import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBienImmobilierALComponent } from './list-bien-immobilier-al.component';

describe('ListBienImmobilierALComponent', () => {
  let component: ListBienImmobilierALComponent;
  let fixture: ComponentFixture<ListBienImmobilierALComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBienImmobilierALComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBienImmobilierALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
