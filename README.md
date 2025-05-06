## Todo API

A simple REST API built with Node.js, Express, and MongoDB for managing todo tasks. This project implements CRUD operations (Create, Read, Update, Delete) for todo items and is containerized using Docker.

# Features
- Create new todo tasks
- List all existing todos
- Update todo status
- Delete todos
- Containerized application with Docker
- MongoDB integration for data persistence

# Getting Started
1. Create Docker network: `docker network create my-network`
2. Start MongoDB: `docker run -d --name mongo --network my-network -p 27017:27017 mongo`
3. Build and run API: `docker build -t todo-app . && docker run -d -p 3070:3000 --name todo-app --network my-network todo-app`

# API Endpoints
- POST `/todos` - Create a new todo
- GET `/todos` - List all todos
- PUT `/todos/:id` - Update a todo
- DELETE `/todos/:id` - Delete a todo
