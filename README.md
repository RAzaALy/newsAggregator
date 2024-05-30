# News Aggregator Website

This project is a news aggregator website built with React.js, integrating APIs from NewsAPI, The Guardian, and The New York Times. The website allows users to search for articles, filter results, customize their news feed, and is optimized for mobile devices.

## Features

1. **Article Search and Filtering:** Users can search for articles by keyword and filter results by date, category, and source.
2. **Personalized News Feed:** Users can customize their news feed by selecting preferred sources, categories, and authors.
3. **Mobile-Responsive Design:** The website is optimized for viewing on mobile devices.

## Data Sources

- **NewsAPI:** Comprehensive API with access to articles from over 70,000 news sources, supporting search and filtering.
- **The Guardian API:** Access articles from The Guardian newspaper, including various categories and search/filtering capabilities.
- **The New York Times API:** Access articles from The New York Times, including various categories and search/filtering capabilities.

## Project Setup

This project is built using React + Vite + Tailwind CSS. To get started:

1. Clone this repository.
2. Install dependencies: `npm install` or `yarn install`.
3. Create a `.env` file and add your API keys for NewsAPI, The Guardian API, and The New York Times API.
4. Start the development server: `npm run dev` or `yarn dev`.

## Containerization with Docker

This project can be containerized using Docker. Follow these steps:

1. Build the Docker image: `docker build -t news-aggregator .`
2. Run the Docker container: `docker run -p 3000:3000 news-aggregator`

## Best Practices

- **DRY (Don't Repeat Yourself):** Use reusable components and functions to avoid repetition.
- **KISS (Keep It Simple, Stupid):** Keep the codebase simple and easy to understand.
- **SOLID Principles:** Follow principles like Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion for clean and maintainable code.

Happy coding!
