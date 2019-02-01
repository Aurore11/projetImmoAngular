import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBienImmobilierComponent } from './list-bien-immobilier.component';

describe('ListBienImmobilierComponent', () => {
  let component: ListBienImmobilierComponent;
  let fixture: ComponentFixture<ListBienImmobilierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListBienImmobilierComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBienImmobilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
