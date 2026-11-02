// 1. Start MongoDB Shell and select the database
// mongosh
use CollegeDB
db

// 2. Create a collection
db.createCollection("students")
show collections

// 3. Insert one document
db.students.insertOne({
    rollNo: 101,
    name: "Arun",
    department: "CSE",
    age: 20,
    mark: 85
})

// 4. Insert multiple documents
db.students.insertMany([
    {
        rollNo: 102,
        name: "Priya",
        department: "IT",
        age: 21,
        mark: 92
    },
    {
        rollNo: 103,
        name: "Kumar",
        department: "CSE",
        age: 19,
        mark: 78
    },
    {
        rollNo: 104,
        name: "Divya",
        department: "ECE",
        age: 20,
        mark: 88
    },
    {
        rollNo: 105,
        name: "Ravi",
        department: "CSE",
        age: 22,
        mark: 67
    }
])

// 5. Retrieve documents
db.students.find()
db.students.find().pretty()
db.students.find({ name: "Priya" })
db.students.findOne({ department: "CSE" })

// 6. Conditional queries
db.students.find({ mark: { $gt: 80 } })
db.students.find({ mark: { $lt: 80 } })
db.students.find({ age: { $gte: 20 } })
db.students.find({ age: { $lte: 20 } })

db.students.find({
    department: { $in: ["CSE", "IT"] }
})

// 7. Update documents
db.students.updateOne(
    { rollNo: 101 },
    { $set: { mark: 90 } }
)

db.students.updateMany(
    { department: "CSE" },
    { $inc: { mark: 5 } }
)

// 8. Delete documents
db.students.deleteOne({ rollNo: 105 })
db.students.deleteMany({ department: "EEE" })

// 9. Sort and limit results
db.students.find().sort({ mark: 1 })
db.students.find().sort({ mark: -1 })
db.students.find().limit(2)

// 10. Count documents and database information
db.students.countDocuments()
show dbs
db.stats()
