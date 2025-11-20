# To-do API Documentation
## Tiny to-do API — Overview

This API allows clients to create, view, update, and delete to-do items.

/creating, retrieving, updating, and deleting todos.

## Base URL

`http://localhost:3000`

## Authentication

No authentication required for this demo API.

### Available Resources

- `/todos` — List or create to-dos
    
- `/todos/{id}` — Retrieve, update, or delete a specific todo


Endpoints
GET /todos/ - Get a to-do list
Description
Returns an array of all to-do list items.



Request
Method: GET
URL: /todos
Parameters: None
Body: None

Successful Response (200)
Returns an array of to-do items.


JSON








[
  {
    "id": "1",
    "title": "Buy milk",
    "completed": false
  },
  {
    "id": "2",
    "title": "Read docs",
    "completed": false
  }
]


Error Codes
None



Endpoints
GET /todos/{id} - Get a specific to-do
Description
Returns a single to-do item by its unique ID.



Request
Method: PUT
URL: /todos/{id}

Query parameters
NameTypeRequiredDescrptionid





Path





Yes





ID of the to-do item






Body: None
Successful Response (200)
Updates a to-do item.


JSON








{
 "id": "3",
 "Title": "New task",
  "Completed": true
}


Error Codes
CodeMeaning404





To-do not found



Endpoints
POST /todos - Create a new to-do
Description
Creates a new to-do item and returns the created object.



Request
Method: GET
URL: /todos

Query parameters
NameTypeRequiredDescrptionid





Path





Yes





ID of the to-do item






Body example


JSON








{
  "Title": "New task",
  "Completed": false
}


Successful Response (201)
Creates a to-do item.


JSON








{
 "id": "3",
 "Title": "New task",
  "Completed": false
}


Error Codes
CodeMeaning400





Invalid request body






Endpoints
PUT /todos/{id} - Update a to-do
Description
Replaces an exisitng to-do item with updated data.



Request
Method: PUT
URL: /todos/{id}

Query parameters
NameTypeRequiredDescrptionid





Path





Yes





ID of the to-do item






Body exampl


JSON








{
  "Title": "New task",
  "Completed": true
}


Successful Response (200)
Updates a to-do item.


JSON








{
 "id": "3",
 "Title": "New task",
  "Completed": true
}


Error Codes
CodeMeaning400





Invalid request body





404





To-do not found





Endpoints
DELETE /todos/{id} - Delete a to-do item
Description
Deletes a to-do item by ID.



Request
Method: Delete
URL: /todos/{id}

Query parameters
NameTypeRequiredDescrptionid





Path





Yes





ID of the to-do item






Body: none


JSON








{
  "Title": "New task",
  "Completed": false
}


Successful Response (200)
Deletes a to-do item.


JSON








{
 "message": "To-do deleted successfully"
}


Error Codes
CodeMeaning404





To-do not found


















