// Use $sort and $limit to list top 3 courses by revenue.

db.students.aggregate([
    {
        $lookup: {
            from: 'payments',
            localField: '_id',
            foreignField: 'studentId',
            as: 'paymentDetails'
        }
    },
    {
        $lookup: {
            from: 'course',
            localField: 'course',
            foreignField: '_id',
            as: 'courseDetails'
        }
    },
    {
        $unwind: '$paymentDetails'
    },
    {
        $unwind: '$courseDetails'
    },
    {
        $group: {
          _id: '$courseDetails.name',
          revenue: {
            $sum:'$paymentDetails.amount'
          }
        }
    },
    {
        $sort: {
            revenue:-1
        }
    },
    {
        $limit: 3
    }
])