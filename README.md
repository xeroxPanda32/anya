# Anya

This project is designed to handle WebSocket messages and store them in a SQLite database. It uses Strapi as the CMS and Socket.IO for real-time communication.

## Installation
1. Clone the repository:

    - git clone https://github.com/xeroxPanda32/anya.git

2. Install dependencies:
    - cd anya
    - npm install

3. Set up environment variables:
- Create a .env file in the root of your project with the following content:

  - HOST=0.0.0.0
  - PORT=1337
  - DATABASE_CLIENT=sqlite
  - DATABASE_FILENAME=../../database/mydatabase.db

4. Start the Strapi server:
   - npm run develop

## Usage   
- Open your browser and go to http://localhost:1337/admin.
- Log in using your Strapi credentials.
- Go to Content-Manager, create a collection message of type text and publish it.
- hit http://localhost:1337 in Postman


## Structure
- config/database.js: Configuration for SQLite database.
- writeMessageToDb.js: Module for writing 
- WebSocket messages to the database.
- index.js: Strapi plugin for handling WebSocket communication.


