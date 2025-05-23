# AI Safety Incident Log Service

A RESTful API service built with TypeScript, Node.js, Express, and MongoDB for logging and managing AI safety incidents.

## Language and Framework Choice

- **TypeScript**: Provides static typing for better code quality and developer experience
- **Node.js**: JavaScript runtime for building scalable network applications
- **Express.js**: Minimalist web framework for Node.js
- **MongoDB**: NoSQL database for flexible document storage
- **Mongoose**: MongoDB object modeling for Node.js

## Features

- Create, read, and delete AI safety incidents
- MongoDB database integration
- TypeScript for type safety
- RESTful API endpoints
- Input validation
- Error handling

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following content:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/ai-safety-incidents
```

4. Build the project:
```bash
npm run build
```

5. Seed the database with sample data (optional):
```bash
npm run seed
```


### Database Schema

The application uses the following MongoDB schema:

```typescript
interface IIncident {
  id: string;           // MongoDB-generated ID
  title: string;        // Short summary of the incident
  description: string;  // Detailed description
  severity: string;     // "Low", "Medium", or "High"
  reported_at: Date;    // Timestamp when the incident was logged
}
```

## Running the Application

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

### 1. Get All Incidents
- **GET** `/api/incidents`
- Returns a list of all incidents
- Response: 200 OK
```json
[
  {
    "id": "...",
    "title": "...",
    "description": "...",
    "severity": "...",
    "reported_at": "..."
  }
]
```

### 2. Create Incident
- **POST** `/api/incidents`
- Creates a new incident
- Request Body:
```json
{
  "title": "New Incident Title",
  "description": "Detailed description here.",
  "severity": "Medium"
}
```
- Response: 201 Created
```json
{
  "id": "...",
  "title": "New Incident Title",
  "description": "Detailed description here.",
  "severity": "Medium",
  "reported_at": "..."
}
```

### 3. Get Incident by ID
- **GET** `/api/incidents/:id`
- Returns a specific incident
- Response: 200 OK
```json
{
  "id": "...",
  "title": "...",
  "description": "...",
  "severity": "...",
  "reported_at": "..."
}
```

### 4. Delete Incident
- **DELETE** `/api/incidents/:id`
- Deletes a specific incident
- Response: 204 No Content

## API Testing Examples

### Using cURL

1. **Get all incidents**:
```bash
curl http://localhost:3000/api/incidents
```

2. **Create a new incident**:
```bash
curl -X POST http://localhost:3000/api/incidents \
  -H "Content-Type: application/json" \
  -d '{"title":"AI Model Hallucination","description":"The AI model generated completely false information.","severity":"High"}'
```

3. **Get incident by ID**:
```bash
curl http://localhost:3000/api/incidents/60f1a2b3c4d5e6f7g8h9i0j1
```

4. **Delete incident**:
```bash
curl -X DELETE http://localhost:3000/api/incidents/60f1a2b3c4d5e6f7g8h9i0j1
```



1. Import the following collection into Postman:
```json
{
  "info": {
    "name": "AI Safety Incident API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Get All Incidents",
      "request": {
        "method": "GET",
        "url": "http://localhost:3000/api/incidents"
      }
    },
    {
      "name": "Create Incident",
      "request": {
        "method": "POST",
        "url": "http://localhost:3000/api/incidents",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\"title\":\"AI Model Hallucination\",\"description\":\"The AI model generated completely false information.\",\"severity\":\"High\"}"
        }
      }
    },
    {
      "name": "Get Incident by ID",
      "request": {
        "method": "GET",
        "url": "http://localhost:3000/api/incidents/:id"
      }
    },
    {
      "name": "Delete Incident",
      "request": {
        "method": "DELETE",
        "url": "http://localhost:3000/api/incidents/:id"
      }
    }
  ]
}
```

## Design Decisions

1. **TypeScript**: Chosen for type safety and better developer experience
2. **MongoDB**: Selected for its flexibility with document-based storage
3. **Express**: Used for its simplicity and extensive middleware ecosystem
4. **RESTful Design**: Follows REST principles for clear and consistent API endpoints
5. **Error Handling**: Centralized error handling middleware for consistent error responses
6. **Input Validation**: Validation for required fields and severity levels

## Challenges and Solutions

1. **TypeScript Integration**: Added custom type definitions to resolve Express router type issues
2. **MongoDB Connection**: Implemented robust connection handling with fallback options
3. **Error Handling**: Created a centralized error handling middleware to catch and format errors
4. **Data Validation**: Implemented validation for required fields and severity levels
5. **Database Schema**: Designed a flexible schema that can be easily extended
