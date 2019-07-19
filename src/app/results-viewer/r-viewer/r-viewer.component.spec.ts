import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RViewerComponent } from './r-viewer.component';

describe('RViewerComponent', () => {
  let component: RViewerComponent;
  let fixture: ComponentFixture<RViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
