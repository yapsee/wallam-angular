import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplainComponent } from './explain.component';

describe('ExplainComponent', () => {
  let component: ExplainComponent;
  let fixture: ComponentFixture<ExplainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExplainComponent]
    });
    fixture = TestBed.createComponent(ExplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
