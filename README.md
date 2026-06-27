# Weather Website

A Node.js weather application built with Express.js and Handlebars templating.

## Features

- Get weather forecasts by location
- Address to coordinates conversion
- Server-side rendered pages
- 404 error handling

## Tech Stack

- Node.js & Express.js
- Handlebars (hbs)
- HTML, CSS, JavaScript

## External APIs

- **Nominatim (OpenStreetMap)** - For geocoding addresses to coordinates
- **WeatherStack** - For weather forecast data

## Installation

```bash
npm install
```

## Usage

**Development:**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

Server runs on `http://localhost:3000`

## Routes

- `GET /` - Home page
- `GET /weather?address=<location>` - Weather forecast
- `GET /about` - About page
- `GET /help` - Help page

## Dependencies

- express
- hbs
- request
- nodemon (dev)

## License

ISC
