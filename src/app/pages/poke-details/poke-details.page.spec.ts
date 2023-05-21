import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokeDetailsPage } from './poke-details.page';

describe('PokeDetailsPage', () => {
  let component: PokeDetailsPage;
  let fixture: ComponentFixture<PokeDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PokeDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
