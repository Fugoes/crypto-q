import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACreateComponent } from './a-create.component';

describe('ACreateComponent', () => {
  let component: ACreateComponent;
  let fixture: ComponentFixture<ACreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
