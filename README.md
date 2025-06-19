# 📚 PLP Bookstore – MongoDB CRUD and Aggregation Practice

This project is part of the PLP MERN specialization and demonstrates core MongoDB operations using a sample `books` collection. It includes data insertion, basic CRUD operations, advanced queries, aggregations, and indexing.

## 🛠️ Setup Instructions

1. Install MongoDB Community Edition from https://www.mongodb.com/try/download/community or use MongoDB Atlas (https://www.mongodb.com/cloud/atlas).
2. Make sure Node.js is installed.
3. Clone this repository and run:  
   `npm install`

## 🚀 How to Run insert_books.js

1. Start MongoDB locally by running:  
   `mongod`
2. In a new terminal, run:  
   `node insert_books.js`
3. This script connects to your local MongoDB server, drops any existing `books` collection in the `plp_bookstore` database, and inserts 12 book documents.

## 📂 View Data in MongoDB Compass

1. Open MongoDB Compass.
2. Connect to `mongodb://localhost:27017`.
3. Select the `plp_bookstore` database.
4. Click the `books` collection to view your documents.

## 📄 How to Run MongoDB Queries

Open MongoDB Compass or Mongo Shell (`mongosh`), then:

```js
use plp_bookstore
