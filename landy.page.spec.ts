import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandyPage } from './landy.page';

describe('LandyPage', () => {
  let component: LandyPage;
  let fixture: ComponentFixture<LandyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LandyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
