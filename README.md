# 🚲 Assignment-8: Bike Servicing Management API

Bike Servicing Management API is a completely CRUD based RESTful API project, designed for motorbike servicing management. Through this application, you can perform customer registration, bike addition, and store bike service records. It is basically an API solution for digitally managing the service management system of a service center or workshop.
It has a fully modular architecture, which is easy to maintain and scale. Using Prisma ORM makes database access type-safe and more reliable. It is a production-ready REST API that follows Global Error Handling, Status Code Management, and Modular MVC Pattern.

## 🔗 Live Backend (Deployed)
🌐 Render Link:



---

## 🛠️ Technologies Required

- Node.js – JavaScript runtime environment

- Express.js – Minimal and flexible Node.js web framework

- TypeScript – Type-safe JavaScript for better code maintainability

- Prisma ORM – Modern ORM for PostgreSQL with type safety and migrations

- PostgreSQL – Relational database for structured data management
---
📦 Project Structure:
```bash
src/
│
├── customer/
│   ├── customer.controller.ts
│   ├── customer.route.ts
│   └── customer.service.ts
│
├── service/
│   ├── service.controller.ts
│   ├── service.route.ts
│   └── service.service.ts
│
├── bike/
│   ├── bike.controller.ts
│   ├── bike.route.ts
│   └── bike.service.ts
│
├── app.ts or main.ts
└── prisma/
    └── schema.prisma


```


## 📦 Setup Guide

### 1. Clone the Repository
```bash
git clone [https://github.com/yourusername/bike-servicing-api.git](https://github.com/rezwanhossen/Assignment-8-Bike-Servicing-Management-server.git)
cd Assignment-8-Bike-Servicing-Management-server
```
### 2. Install Dependencies
```bash
yarn install

```
### 3. Configure Environment Variables
Create a .env file and add your database URL:
```bash
DATABASE_URL=postgresql://user:password@host:port/database
NODE_ENV=development

```
### 4. Prisma Setup
```bash
npx prisma generate
npx prisma migrate dev --name init

```
### 5. Start Development Server
```bash
yarn dev

```
### 6. Build for Production
```bash
yarn build
yarn start

```

### 🔹 Customer Endpoints

- `POST /api/customers` – Create a customer
- `GET /api/customers` – Get all customers
- `GET /api/customers/:id` – Get a single customer
- `PUT /api/customers/:id` – Update a customer
- `DELETE /api/customers/:id` – Delete a customer

### 🔹 Bike Endpoints

- `POST /api/bikes` – Add a bike
- `GET /api/bikes` – Get all bikes
- `GET /api/bikes/:id` – Get a specific bike

### 🔹 Service Record Endpoints

- `POST /api/services` – Add a service record
- `PUT /api/services/:id/complete` – Mark service as done
- `GET /api/services/status` – Get pending or overdue services (older than 7 days)

---

## 🌟 Key Features

- 🧾 **Full CRUD** for Customer, Bike & Service Records
- 🔄 **Service Completion Update** with optional completion date
- 📆 **Overdue & Pending Services** detection (older than 7 days)
- ✅ **Prisma ORM** for type-safe and efficient DB access
- 💥 **Global Error Handling** with status codes and stack traces in dev mode
- 📁 **Modular Code Structure**: Controller, Service, Route, Model
- 🌍 **Deployable to platforms** like Render, Railway, Vercel, or Fly.io

---
