// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('school');

// Create a new document in the collection.
db.getCollection('students').insertOne({
    name: 'Sandraa',
    age: 21,
    courses: ["Math", "Science", "History"],
    address: {
        street: '123 Elm St',
        city: 'Springfield',
        state: 'IL',
        zip: '62704'
    },
    registrationdate: new Date('2023-09-01T00:00:00Z'),
    fulltime: true,

});
