[{
  _id: ObjectId("..."),
  customerId: ObjectId("c1"),
  amount: 12000,
  status: "completed",
  createdAt: ISODate("2026-02-20")
}
{
  _id: ObjectId("c1"),
  name: "Aisha",
  city: "Mumbai",
  isPremium: true
}]

db.customers.aggregate([
    {
        $match: {
            city: 'Mumbai',
            isPremium: true
        }
    },
    {
        $lookup: {
            from: 'orders',
            let: { uid: '$_id' },
            pipeline: [
                {
                    $match: {
                        $expr: {
                            $eq:['$customerId','$$uid']
                        },
                        status:'completed'
                    }
                },
                {
                    $project: {
                        amount: 1,
                        
                    }
                }
            ],
            as:'orderDetails'
        }
    },
    {
        $unwind:'orderDetails'
    },
    {
        $project: {
            amount: '$orderDetails.amount',
            name: 1,
            city:1
        }
    }
])