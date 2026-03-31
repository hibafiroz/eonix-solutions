// Topper in MongoDB (highest score)

db.marks.aggregate([
    {
        $group: {
            _id:'$subject'
        },
        
    }
])

