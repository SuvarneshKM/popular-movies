# React Native Movie App

This repository contains both backend and frontend folders for a React Native app that fetches movie data from the TMDB API.

## Backend

The backend folder consists of Node.js files. To set up the backend:

- Navigate to the backend folder.
- Install dependencies using `npm install`.
- Create a `.env` file with the following variables:

```bash
API_KEY=your_tmdb_api_key
BASE_URL=https://api.themoviedb.org/3
```

Replace your_tmdb_api_key with your actual TMDB API key.

- Run the backend using `npm start`.

Ensure that you have ngrok installed on your system. Once the backend is running, create a ngrok URL using the following command:

```bash
ngrok http 3000
```

Copy the ngrok URL for later use.

## Frontend

The frontend folder consists of the React Native app. To set up the frontend:

- Navigate to the frontend folder.
- Install dependencies using `npm install`.
- Open `Home.tsx` inside the screens folder.
- Change the `BASE_URL` variable to the ngrok URL copied earlier.
- Run the frontend using `npm start`.

You can run the app using a simulator or install Expo Go on your Android device. Scan the QR code shown in the terminal to run the app on your device.

Ensure you have the necessary tools and dependencies installed on your system for a smooth setup and running of the React Native app.
