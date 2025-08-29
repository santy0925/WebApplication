// En app.component.ts o en tu servicio
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  constructor(private http: HttpClient) { }

  getWeather() {
    // La URL correcta de tu API, no la combines con la URL de tu app de Angular
    const apiUrl = 'https://localhost:7255/WeatherForecast';
    
    // Realiza la solicitud HTTP con la URL correcta
    return this.http.get(apiUrl);
  }
}