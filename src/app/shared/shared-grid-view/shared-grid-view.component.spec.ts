import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedGridViewComponent } from './shared-grid-view.component';

describe('SharedGridViewComponent', () => {
  let component: SharedGridViewComponent;
  let fixture: ComponentFixture<SharedGridViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedGridViewComponent]
    });
    fixture = TestBed.createComponent(SharedGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
