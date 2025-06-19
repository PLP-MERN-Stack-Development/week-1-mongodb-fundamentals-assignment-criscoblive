Task 2: Basic CRUD Operations

// Find all books in a specific genre
db.books.find({ genre: "Fiction" })

// Find books published after a certain year
db.books.find({ published_year: { $gt: 1950 } })

// Find books by a specific author
db.books.find({ author: "George Orwell" })

// Update the price of a specific book
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 13.99 } }
)

// Delete a book by its title
db.books.deleteOne({ title: "Moby Dick" })

Task 3: Advanced Queries

// Find books in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
})

// Return only title, author, and price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })

// Sort books by price (ascending)
db.books.find().sort({ price: 1 })

// Sort books by price (descending)
db.books.find().sort({ price: -1 })

// Pagination: Page 1 (5 books)
db.books.find().limit(5)

// Pagination: Page 2 (next 5 books)
db.books.find().skip(5).limit(5)

Task 4: Aggregation Pipeline

// Average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
])

// Author with the most books
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
])

// Group books by publication decade and count
db.books.aggregate([
  {
    $group: {
      _id: {
        $concat: [
          { $substr: [{ $subtract: ["$published_year", { $mod: ["$published_year", 10] }] }, 0, 4] },
          "s"
        ]
      },
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
])

Task 5: Indexing

//  Create index on title
db.books.createIndex({ title: 1 })

// Create compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 })

// Use explain() to check performance
db.books.find({ title: "The Hobbit" }).explain("executionStats")


