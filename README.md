## __________________Staff Management Application______________________

A simple Staff Management system using ASP.NET Core Web API (backend with PostgreSQL) and React (frontend).

This repository is a mono-repo and contains both:

backend/ → ASP.NET Core Web API

frontend/ → React frontend

Backend Setup (ASP.NET Core API)
## 1️⃣ Navigate to backend folder
cd backend

## 2️⃣ Configure Database

Update appsettings.json with your PostgreSQL connection string:

"ConnectionStrings": { 
  "DefaultConnection": "Host=localhost;Database=StaffDB;Username=postgres;Password=yourpassword" 
}


## ⚠️ Replace yourpassword with your actual PostgreSQL password.

## 3️⃣ Apply Migrations & Create Database

Run:

dotnet ef database update


Or in Visual Studio Package Manager Console:

Update-Database


This will create the database and apply all migrations.

## 4️⃣ Run the Backend API
dotnet run


The API will be available at:

HTTPS: https://localhost:7012

HTTP: http://localhost:5282

## ✅ Test an endpoint:

https://localhost:7012/api/staff

## 5️⃣ Run Backend Tests

If you have unit or integration tests:

dotnet test ./backend/Staff_Management.sln


Unit tests verify individual classes/services

Integration tests verify API endpoints and database

Frontend Setup (React)
1️⃣ Navigate to frontend folder
cd ../frontend

## 2️⃣ Install dependencies
npm install

## 3️⃣ Verify API URL

Edit services/api.jsx:

import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5282/api/staff", // Use HTTP locally to avoid SSL issues
});


If you want HTTPS, use https://localhost:7012/api/staff but you may need to trust the dev certificate:

dotnet dev-certs https --trust

## 4️⃣ Start the Frontend
npm start


The app will open at:

http://localhost:3000

## 5️⃣ Verify Connection

Make sure the backend API is running

Test frontend functionality: Add, Edit, Delete, Search Staff

Check browser console for network or CORS errors

Exporting Reports

Use Excel or PDF export after performing advanced search

Frontend calls the backend API via ExportService.jsx

If using HTTPS, ensure dev certificate is trusted

Advanced Search Form

You can search staff by:

Staff ID

Gender

Birthday range (from → to)

Reports can be exported after search results.

Notes

The backend must allow CORS from http://localhost:3000

PostgreSQL must be running and properly configured

Update these files if backend URL or port changes:

services/api.jsx (frontend API calls)

ExportService.jsx (Excel/PDF export endpoint)

Testing

Unit tests: Verify individual backend methods and services

Integration tests: Verify API endpoints with database

End-to-end tests (optional): Verify frontend → backend flow

Run tests with:

dotnet test
