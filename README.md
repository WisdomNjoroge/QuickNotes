NoteNest
A simple backend API for managing notes, built with Express.js and MySQL.

Features
Create, Read, Update, and Delete (CRUD) notes.
MySQL for data storage.
RESTful API using Express.
User Authorization
Getting Started
Clone the repository:


bash
Copy code
git clone https://github.com/WisdomNjoroge/QuickNotes.git
Install dependencies:

bash
Copy code
npm install
Set up the MySQL database:

Create a notenest database.
Update config/database.js with your MySQL credentials.
Start the server:

bash
Copy code
npm start
API Endpoints
GET /api/notes - Fetch all notes.
POST /api/notes - Create a new note.
GET /api/notes/:id - Get a specific note.
PUT /api/notes/:id - Update a note.
DELETE /api/notes/:id - Delete a note.
License
MIT


