import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component'; // La ruta de importación se ha corregido a 'app.component'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // Se asume que el componente tiene una propiedad 'title' que coincide con el texto en el h1
    const app = fixture.componentInstance;
    expect(compiled.querySelector('h1')?.textContent).toContain(app.title);
  });
});