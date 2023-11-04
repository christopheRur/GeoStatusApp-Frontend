import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoStatComponent } from './geo-stat.component';

describe('GeoStatComponent', () => {
  let component: GeoStatComponent;
  let fixture: ComponentFixture<GeoStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoStatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeoStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
