import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerFilterComponent } from './layer-filter.component';

describe('LayerFilterComponent', () => {
  let component: LayerFilterComponent;
  let fixture: ComponentFixture<LayerFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
