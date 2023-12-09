import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsPublicComponent } from './campaigns-public.component';

describe('CampaignsPublicComponent', () => {
  let component: CampaignsPublicComponent;
  let fixture: ComponentFixture<CampaignsPublicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampaignsPublicComponent]
    });
    fixture = TestBed.createComponent(CampaignsPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
