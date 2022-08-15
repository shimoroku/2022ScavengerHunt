import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandInfoDisplayComponent } from './command-info-display.component';

describe('CommandInfoDisplayComponent', () => {
  let component: CommandInfoDisplayComponent;
  let fixture: ComponentFixture<CommandInfoDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandInfoDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandInfoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
