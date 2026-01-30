# 🌦 Node.js Weather App (Docker + ECS Ready)

A simple Node.js weather application using Express and OpenWeather API.
Containerized using Docker and deployable on AWS EC2 / ECS.

## Tech Stack
- Node.js
- Express
- Docker
- AWS (EC2, ECR, ECS)

## Run Locally
```bash
npm install
export WEATHER_API_KEY=your_api_key
node app.js


Run with Docker
docker build -t weather-app .
docker run -p 3000:3000 -e WEATHER_API_KEY=your_api_key weather-app


API

GET /weather/{city}


Commit it:
```bash
git add README.md
git commit -m "Add README documentation"
git push
