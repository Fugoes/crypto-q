import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QCreateComponent } from './q-create.component';

describe('QCreateComponent', () => {
  let component: QCreateComponent;
  let fixture: ComponentFixture<QCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
