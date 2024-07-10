# TodoList Project

Welcome to the TodoList project! This README file provides all the necessary information to set up, run, and maintain the project.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Database Setup](#database-setup)
- [API Endpoints](#api-endpoints)
- [Frontend Setup](#frontend-setup)
- [Contact](#contact)

## Description

This project is a simple TodoList application developed using Spring Boot for the backend and a basic HTML/JavaScript frontend.

## Features

- Add, edit, and delete tasks.
- Mark tasks as completed.
- View list of all tasks.
- Clear all tasks.

## Technologies Used

- Java 17
- Spring Boot 3.3.1
- Spring Data JPA
- MariaDB
- HTML/CSS/JavaScript

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Java 17
- Maven
- A running MariaDB instance

### Installation

1. **Clone the repository**
   
   ```bash
   git clone https://github.com/bachmetal/TodoList.git
   cd TodoList
   ```

2. **Build the project**
   
   ```bash
   mvn clean install
   ```

## Database Setup

### MariaDB Setup

1. **Install MariaDB**

   If you don't have MariaDB installed, you can download and install it from the official MariaDB website: https://mariadb.org/

2. **Start the MariaDB service**

   ```bash
   sudo systemctl start mariadb
   ```

3. **Create the database and user**

   Open the MariaDB command-line tool by running:

   ```bash
   sudo mysql -u root -p
   ```

   Once you are in the MariaDB shell, run the following commands to create a database and a user:

   ```sql
   CREATE DATABASE todolist;
   CREATE USER 'root'@'localhost' IDENTIFIED BY '';
   GRANT ALL PRIVILEGES ON todolist.* TO 'root'@'localhost';
   FLUSH PRIVILEGES;
   ```

4. **Update the application properties**

   Ensure that your `src/main/resources/application.properties` file contains the following:

   ```properties
   spring.datasource.url=jdbc:mariadb://localhost:3306/todolist
   spring.datasource.username=root
   spring.datasource.password=
   spring.datasource.driverClassName=org.mariadb.jdbc.Driver
   spring.jpa.hibernate.ddl-auto=validate
   spring.jpa.show-sql=true
   spring.jpa.properties.hibernate.format_sql=true
   spring.application.name=TodoList
   server.port=8080
   ```

## API Endpoints

### Get All Todos

```http
GET /api/todos/
```

### Get Todo By ID

```http
GET /api/todos/{id}
```

### Add Todo

```http
POST /api/todos/
```

### Update Todo

```http
PUT /api/todos/{id}
```

### Mark Todo as Complete

```http
PUT /api/todos/{id}/complete
```

### Delete Todo

```http
DELETE /api/todos/{id}
```

### Delete All Todos

```http
DELETE /api/todos/all
```

## Frontend Setup

1. Open `index.html` in a web browser.
2. The application will be available at `http://localhost:8080`.
3. Interact with the todo list by adding, editing, deleting, and marking tasks as completed.

## Contact

If you have any questions or feedback, please contact me at:

**Name:** Navid Rahbar  
**Location:** Vienna  
**Email:** navid.rahbar87@gmail.com

Feel free to create an issue or a pull request if you find any bugs or have suggestions for improvements.

---

Thank you for using the TodoList application! I hope you find it useful.
