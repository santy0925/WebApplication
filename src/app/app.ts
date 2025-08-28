// app.component.ts
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherForecastService } from './weatherforecast.service';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  clima: any;
  weatherForecastService = inject(WeatherForecastService);

  constructor() {
    this.weatherForecastService.obtenerClima().subscribe(datos => {
      this.clima = datos;
    });
  }
}
