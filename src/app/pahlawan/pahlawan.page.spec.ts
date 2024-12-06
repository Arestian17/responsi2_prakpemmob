import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PahlawanPage } from './pahlawan.page';

describe('PahlawanPage', () => {
  let component: PahlawanPage;
  let fixture: ComponentFixture<PahlawanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PahlawanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
