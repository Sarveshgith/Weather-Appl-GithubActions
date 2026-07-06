# Weather Application (Weather-Appl)

A simple, minimalistic responsive weather application built with Angular and Tailwind CSS that retrieves real-time weather forecast records from an API and displays them in a clean, interactive table.

## Deployment URL
Live Demo: [https://sarveshgith.github.io/Weather-Appl-GithubActions/](https://sarveshgith.github.io/Weather-Appl-GithubActions/)

---

## Project Description
This application connects to a backend weather forecasting service to display current weather alerts and forecast metrics.

### Key Features
- **API Integration**: Integrates Angular's `HttpClient` to communicate with the weather service endpoint.
- **Minimalistic Responsive UI**: Table adapts perfectly to mobile, tablet, and desktop screens.
- **Live Statistics**: Displays the total count of loaded weather records.
- **Smart Highlighting**: Highlights high-temperature rows (> 30°C) with a distinctive background color and "Hot" indicator badges.
- **Interactive Refreshes**: Includes a Refresh button to reload weather forecasts on-demand.
- **Robust State Management**: Gracefully handles loading and user-friendly error fallback states.

---

## Angular Version
- **Angular Framework**: v21.2.x (v21.2.13)
- **Node.js Target**: v22+
- **Test Runner**: Vitest v4.x
- **CSS Processor**: Tailwind CSS v4.x

---

## Installation & Setup Steps

### 1. Clone the Repository
```bash
git clone https://github.com/Sarveshgith/Weather-Appl-GithubActions.git
cd Weather-Appl-GithubActions
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
To start a local server, run:
```bash
npm run start
# or
ng serve
```
Open your browser and navigate to `http://localhost:4200/`.

### 4. Build the Project
To compile the production-ready code:
```bash
npm run build
# or
ng build
```

### 5. Running Tests
To run unit tests using Vitest:
```bash
npm run test
# or
ng test
```
