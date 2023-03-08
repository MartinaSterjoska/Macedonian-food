import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsComponentComponent } from './restaurants-component.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

describe('RestaurantsComponentComponent', () => {
  let component: RestaurantsComponentComponent;
  let fixture: ComponentFixture<RestaurantsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
