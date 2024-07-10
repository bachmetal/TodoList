Todo List Project

Author

Navid Rahbar
Vienna


Description

This project is a simple Todo List web application built using Spring Boot for the backend and JavaScript for the frontend. It allows users to add, edit, complete, and delete tasks. The completed tasks are visually marked by a strikethrough.


Features


Quickly add new tasks

Edit existing tasks

Complete tasks by clicking on them

Delete tasks individually

Clear all tasks at once


Technologies Used


Backend: Spring Boot, Java

Frontend: JavaScript, HTML, CSS

Database: MariaDB


Getting Started

Prerequisites


Java 11 or higher

Spring Boot 2.7.x or higher

MariaDB 10.5 or higher


Installing


Clone the Repository
git clone https://github.com/username/todolist.git
cd todolist


Set up the Database

Install and configure MariaDB.

Create a new database:
CREATE DATABASE todolist;


Modify application.properties with your database configuration:
spring.datasource.url=jdbc:mariadb://localhost:3306/todolist
spring.datasource.username=your-username
spring.datasource.password=your-password
spring.datasource.driverClassName=org.mariadb.jdbc.Driver
spring.jpa.hibernate.ddl-auto=validate
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
spring.application.name=TodoList
server.port=8080




Run the Application
Use Maven to build and run the application:
mvn clean install
mvn spring-boot:run



Running the Project

Once the application is running, you can navigate to http://localhost:8080 in your web browser to see the Todo List web application.


Usage


Add a Task: Enter a task in the input box and press "Add". The task will appear in the list below.

Complete a Task: Click on the checkbox next to a task to mark it as complete. The task's text will be struck through to indicate completion.

Edit a Task: Click on the "Edit" button next to a task to modify its contents. Enter the new text in the prompt that appears and press "OK" to save changes.

Delete a Task: Click on the "X" button next to a task to delete it. A confirmation prompt will appear; click "OK" to confirm deletion.

Clear All Tasks: Press the "Clear All" button to delete all tasks. A confirmation prompt will appear; click "OK" to confirm.


API Endpoints


Retrieve All Todos
GET /api/todos/

Returns a list of all todos.

Retrieve Todo by ID
GET /api/todos/{id}

Returns a specific todo by its ID.

Add a New Todo
POST /api/todos/

Adds a new todo. The request body should contain the todo item.

Update a Todo by ID
PUT /api/todos/{id}

Updates a specific todo with new information. The request body should contain the updated todo item.

Mark a Todo as Complete by ID
PUT /api/todos/{id}/complete

Marks a specific todo as complete.

Delete a Todo by ID
DELETE /api/todos/{id}

Deletes a specific todo by its ID.

Delete All Todos
DELETE /api/todos/all

Deletes all todos.


Frontend

The frontend interacts with the backend using JavaScript fetch API calls. The UI updates dynamically based on user interactions and server responses.


Scripts

The main JS file (main.js) handles the following tasks:



Fetching tasks from the server when the DOM content is loaded.

Adding a task by sending a POST request to the server.

Editing a task by sending a PUT request to the server.

Marking a task as complete by sending a PUT request to the server.

Deleting a task by sending a DELETE request to the server.

Clearing all tasks by sending a DELETE request to the server.


Contribution

If you wish to contribute to this project, please follow these guidelines:



Fork the repository.

Create a new branch (git checkout -b feature-branch).

Make your changes and commit them (git commit -m 'Add feature').

Push to the branch (git push origin feature-branch).

Create a new Pull Request.


License

This project is licensed under the MIT License. See the LICENSE file for details.


Acknowledgments


Thanks to the Spring Boot and MariaDB teams for their excellent frameworks and tools.