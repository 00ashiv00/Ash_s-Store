# Ash's Store - Online Fashion Store

A full-stack e-commerce application for an online fashion store built with modern web technologies.

## 📋 Overview
Ash's Store is a comprehensive online fashion retail platform featuring a responsive user interface, robust backend services, and database management for product catalog, user management, and order processing.

## 🏗️ Project Architecture

### Technology Stack

**Frontend:**
- Angular 17.3.0
- TypeScript 5.4.2
- Bootstrap 5.3.3
- Font Awesome 4.7.0
- RxJS 7.8.0

**Backend:**
- Spring Boot 3.2.3
- Java 17
- Spring Data JPA
- Spring Web
- MySQL Connector

**Database:**
- MySQL

**Build & Testing:**
- Maven (Backend)
- Angular CLI (Frontend)
- JUnit (Backend Testing)

## 📁 Project Structure

```
Ash_s-Store/
├── Project/
│   ├── Frontend/
│   │   ├── online-fashion-store/          # Angular application
│   │   │   ├── src/
│   │   │   │   └── app/                   # Angular components
│   │   │   ├── angular.json               # Angular configuration
│   │   │   └── package.json               # Frontend dependencies
│   │   └── images/                        # Frontend assets
│   ├── Backend/
│   │   └── onlineFashionStore/            # Spring Boot application
│   │       ├── src/
│   │       ├── pom.xml                    # Maven configuration
│   │       └── mvnw                       # Maven wrapper
│   └── images/                            # Product and asset images
├── Queries/                               # Database queries
├── EER.png                                # Entity-Relationship Diagram
└── UseCaseDiagram.jpg                     # Use Case Diagram
```

## 🚀 Getting Started

### Prerequisites

- **Backend:**
  - Java 17 or higher
  - Maven 3.6+
  - MySQL 5.7+

- **Frontend:**
  - Node.js 18+ and npm 9+
  - Angular CLI 17+

### Installation

#### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd Project/Backend/onlineFashionStore
   ```

2. Configure MySQL database connection in `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/fashion_store
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   spring.jpa.hibernate.ddl-auto=update
   ```

3. Build and run the application:
   ```bash
   ./mvnw spring-boot:run
   ```

   The backend will start on `http://localhost:8080`

#### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd Project/Frontend/online-fashion-store
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   The application will open at `http://localhost:4200`

## 📖 Available Scripts

### Frontend

- `npm start` - Start the Angular development server
- `npm build` - Build the project for production
- `npm watch` - Watch for changes and rebuild
- `npm test` - Run unit tests with Karma

### Backend

- `./mvnw spring-boot:run` - Run the Spring Boot application
- `./mvnw clean install` - Clean and install dependencies
- `./mvnw test` - Run tests

## 🗄️ Database Schema

The project includes comprehensive database design documentation:
- **EER.png** - Entity-Relationship Diagram showing database structure
- **Queries/** - SQL queries for database operations and setup
- **UseCaseDiagram.jpg** - Use case diagram showing system interactions

## 🎯 Features

- User authentication and account management
- Product catalog with categories
- Shopping cart functionality
- Order management
- Responsive design for mobile and desktop
- Bootstrap-based UI components
- Font Awesome icons for enhanced UX

## 🔧 Configuration

### Backend Configuration

Edit `application.properties` in `src/main/resources/`:
```properties
server.port=8080
spring.application.name=onlineFashionStore
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
```

### Frontend Configuration

Edit `angular.json` for build and development configurations.

## 👤 Author

Ashiv Sanjeev

---

