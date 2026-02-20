use('task-practise')

// Unwind items
// Calculate totalAmount = price × quantity
// Using $bucket, group orders into these ranges based on totalAmount:
// 0–500
// 500–1500
// 1500–5000
// For each bucket return:
// orderCount
// product names array
// totalRevenue (sum of totalAmount)

db.customer.find()
db.customer.aggregate([
  {
    $unwind: '$items'
  },
  {
    $addFields: {
      totalAmount: {
        $multiply:['$items.price','$items.quantity']
      }
    }
  },
  {
    $bucket: {
      groupBy: '$totalAmount',
      boundaries: [0, 500, 1500, 5000],
      default: 'others',
      output: {
        orderCount: { $sum: 1 },
        products: { $push: '$items.name' },
        totalRevenue: { $sum: '$totalAmount' }
      }
    }
  }
])