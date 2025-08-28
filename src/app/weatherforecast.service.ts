// weatherforecast.service.ts
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {
  private http = inject(HttpClient);
  private URLbase = environment.apiURL + '/WeatherForecast';

  public obtenerClima() {
    return this.http.get<any>(this.URLbase);
  }
}
