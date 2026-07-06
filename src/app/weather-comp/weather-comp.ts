import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService, WeatherForecast } from '../weather.service';

@Component({
  selector: 'app-weather-comp',
  imports: [CommonModule],
  templateUrl: './weather-comp.html',
  styleUrl: './weather-comp.css',
})
export class WeatherComp implements OnInit {
  readonly forecasts = signal<WeatherForecast[]>([]);
  readonly isLoading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  constructor(private readonly weatherService: WeatherService) {}

  ngOnInit(): void {
    this.fetchWeatherData();
  }

  fetchWeatherData(): void {
    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.weatherService.getForecasts().subscribe({
      next: (data) => {
        this.forecasts.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error fetching weather data', err);
        this.errorMessage.set('Failed to fetch weather forecasts. Please verify your connection and try again.');
        this.isLoading.set(false);
      }
    });
  }

  refresh(): void {
    this.fetchWeatherData();
  }
}
