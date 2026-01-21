##--------------------------------Staff Management Application--------------------------------

A simple Staff Management system using ASP.NET Core Web API (backend with PostgreSQL) and React (frontend).

This repo is a mono-repo. It contains both:

backend/       -> ASP.NET Core Web API
frontend/      -> React frontend

Backend Setup (ASP.NET Core API)

## 1️⃣ Navigate to backend folder

cd backend


## 2️⃣ Configure Database

Update appsettings.json with your PostgreSQL connection string:

"ConnectionStrings": { 
  "DefaultConnection": "Host=localhost;Database=StaffDB;Username=postgres;Password=yourpassword" 
}


⚠️ Replace yourpassword with your actual PostgreSQL password.

## 3️⃣ Apply Migrations & Create Database

Run one of the following commands:

dotnet ef database update


Or, if using Visual Studio Package Manager Console:

Update-Database


This will create the database and apply all migrations.

## 4️⃣ Run the Backend API

dotnet run


The API will be available at:

https://localhost:7012


✅ Test an endpoint:

https://localhost:7012/api/staff

Frontend Setup (React)

## 1️⃣ Navigate to frontend folder

cd ../frontend


## 2️⃣ Install dependencies

npm install


## 3️⃣ Verify API URL

In services/api.jsx, make sure the API base URL matches your backend:

import axios from "axios";

export const api = axios.create({
  baseURL: "https://localhost:7012/api/staff",
});


Update this URL if your backend is running on a different port.

## 4️⃣ Start the Frontend

npm start


The app will open at http://localhost:3000.

The frontend fetches data from the backend API using services/api.jsx.

## 5️⃣ Verify the Connection

Ensure the backend API is running.

Test frontend functionality (Add, Edit, Delete, Search Staff).

Check browser console for any errors (network/CORS issues).

Notes

The backend must allow CORS from http://localhost:3000.

PostgreSQL must be running and properly configured in the backend.

If the backend URL or port changes, update services/api.jsx.
