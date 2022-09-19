import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclusionPageComponent } from './conclusion-page.component';

describe('ConclusionPageComponent', () => {
  let component: ConclusionPageComponent;
  let fixture: ComponentFixture<ConclusionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConclusionPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConclusionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
