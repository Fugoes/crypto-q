import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QCreatedComponent } from './q-created.component';

describe('QCreatedComponent', () => {
  let component: QCreatedComponent;
  let fixture: ComponentFixture<QCreatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QCreatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
