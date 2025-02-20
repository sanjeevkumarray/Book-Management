# Book Management System

This project is a full-stack web application designed to manage a list of books. It includes a React frontend and a Django backend with Django REST Framework. The application allows users to view, add, edit, and delete books, as well as manage authors.

## Project Structure

- **Frontend**: Located in the `/client` directory, this is a React application that interacts with the backend API.
- **Backend**: Located in the `/api` directory, this is a Django application using Django REST Framework to provide a RESTful API for managing books and authors.

## Features

### Frontend (React)
- **Display a list of books**: Shows all available books with options to edit or delete.
- **Add a new book**: Form to enter book title and select an author from a dropdown list.
- **Edit an existing book**: Modify book details and update them.
- **Delete a book**: Remove a book from the list.
- **Author selection**: Dropdown menu to select an author when adding or editing a book.
- **API Interaction**: Communicates with the Django backend to perform CRUD operations.
- **Error Handling**: Displays appropriate error messages to the user when API interactions fail.
- **Filtering and sorting**: Allows users to filter and sort the book list.

> See `/client/README.md` for more details.

### Backend (Django)

#### Models

- **Author**:
  - `name`: String, max length 255 characters.
  - `birth_date`: Optional date.

- **Book**:
  - `title`: String, max length 255 characters.
  - `author`: Foreign key to the Author model.

#### API Endpoints

- **Author**: CRUD operations (Create, Read, Update, Delete).
- **Book**: CRUD operations (Create, Read, Update, Delete).
- **Serialization**: Uses Django REST Framework serializers to convert complex data types to native Python types.
- **ViewSets**: Provides logic for CRUD operations.
- **Routing**: Configured to handle API requests and route them to appropriate viewsets.
- **Data Integrity**: Ensures correct relationships between books and authors.

## Setup Instructions

### Prerequisites

- **Node.js** and **npm** (for React)
- **Python 3.x** and **pip** (for Django)
- **PostgreSQL**

### Frontend Setup

Navigate to the client directory:

```sh
cd client
```

Install the dependencies:

```sh
npm install
```

Start the React development server:

```sh
npm start
```

The React app will be accessible at [http://localhost:3000](http://localhost:3000).

### Backend Setup

Navigate to the API directory:

```sh
cd api
```

Create a virtual environment and activate it:

```sh
python -m venv env
source env/bin/activate  # On macOS/Linux
env\Scripts\activate  # On Windows
```

Install the dependencies:

```sh
pip install -r requirements.txt
```

Apply database migrations:

```sh
python manage.py migrate
```

Create a superuser (optional, for accessing the Django admin):

```sh
python manage.py createsuperuser
```

Start the Django development server:

```sh
python manage.py runserver
```

The Django API will be accessible at [http://localhost:8000](http://localhost:8000).

### Alternative

Run shell scripts defined in `start-api.sh` and `start-client.sh`:

```sh
./start-api.sh
./start-client.sh
```

## API Documentation

- **Base URL**: `http://localhost:8000/api/`
- **Endpoints**:
  - `/authors/` - List and manage authors.
  - `/authors/{id}/books` - List author's books.
  - `/books/` - List and manage books.

## Additional Information

- **Code Repository**: The complete source code for this project is available on GitHub.
- **Contributions**: Contributions to improve or extend this project are welcome. Please submit a pull request with your proposed changes.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.

---

Feel free to reach out if you have any questions or need further clarification on the setup or functionality of this project.
