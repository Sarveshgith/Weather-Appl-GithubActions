import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environment';

export interface WeatherForecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string | null;
}

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    private readonly apiUrl = environment.apiUrl;

    constructor(private readonly http: HttpClient) { }

    getForecasts(): Observable<WeatherForecast[]> {
        return this.http.get<WeatherForecast[]>(this.apiUrl);
    }
}
