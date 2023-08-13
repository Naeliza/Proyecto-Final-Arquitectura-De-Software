import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteBachesComponent } from './reporte-baches.component';

describe('ReporteBachesComponent', () => {
  let component: ReporteBachesComponent;
  let fixture: ComponentFixture<ReporteBachesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReporteBachesComponent]
    });
    fixture = TestBed.createComponent(ReporteBachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
