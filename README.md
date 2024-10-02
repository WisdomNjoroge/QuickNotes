NoteNest
# QuickNotes

A simple backend API for managing notes, built with Express.js and MySQL.

## Features

- Create, Read, Update, and Delete (CRUD) notes.
- MySQL for data storage.
- RESTful API using Express.
- User Authorization.

## Getting Started

### Clone the repository:

```bash
git clone https://github.com/WisdomNjoroge/QuickNotes.git
```

### Install dependencies:

```bash
npm install
```

### Set up the MySQL database:

1. Create a `notenest` database.
2. Update `config/database.js` with your MySQL credentials.

### Start the server:

```bash
npm start
```

## API Endpoints

- `GET /api/notes` - Fetch all notes.
- `POST /api/notes` - Create a new note.
- `GET /api/notes/:id` - Get a specific note.
- `PUT /api/notes/:id` - Update a note.
- `DELETE /api/notes/:id` - Delete a note.

## License

This project is licensed under the MIT License.
