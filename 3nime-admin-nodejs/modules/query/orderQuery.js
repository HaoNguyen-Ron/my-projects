const { getQueryDateTime, fuzzySearch } = require('../../utils');

const {
  Category,
  Supplier,
  Customer,
  Employee,
  Product,
  Order,
} = require('../../model');

module.exports = {
  getOrderWithPrice: async (req, res, next) => {
    try {

      let results = await Order.aggregate()
        .unwind('orderDetails')
        .addFields({
          originalPrice: {
            $divide: [
              {
                $multiply: [
                  '$orderDetails.price',
                  { $subtract: [100, '$orderDetails.discount'] },
                ],
              },
              100,
            ],
          },
        })
        .group({
          _id: '$orderDetails._id',
          createdDate: { $first: '$createdDate' },
          shippedDate: { $first: '$shippedDate' },
          status: { $first: '$status' },
          total: {
            $sum: { $multiply: ['$originalPrice', '$orderDetails.quantity'] },
          },
        })

      let total = await Order.countDocuments();

      return res.send({
        code: 200,
        total,
        totalResult: results.length,
        payload: results,
      });
    } catch (err) {
      console.log('««««« err »»»»»', err);
      return res.status(500).json({ code: 500, error: err });
    }
  },

  SortOrderbyStatus: async (req, res, next) => {
    try {
      const { status } = req.query;

      let results = await Order.aggregate()
        .match({ status }) // ~ find
        .lookup({
          from: 'customers',
          localField: 'customerId',
          foreignField: '_id',
          as: 'Customer',
        })
        .unwind('Customer')
        .lookup({
          from: 'employees',
          localField: 'employeeId',
          foreignField: '_id',
          as: 'employee',
        })
        .unwind('employee')
        .project({
          customerId: 0,
          employeeId: 0,
        });

      let total = await Order.countDocuments();

      return res.status(200).send({
        total,
        totalResult: results.length,
        payload: results,
      });
    } catch (err) {
      console.log('««««« err »»»»»', err);
      return res.status(500).json({ code: 500, error: err });
    }
  },

  SortOrderbyPayment: async (req, res, next) => {
    try {
      const { paymentType } = req.query;

      let results = await Order.aggregate()
        .match({ paymentType }) // ~ find
        .lookup({
          from: 'customers',
          localField: 'customerId',
          foreignField: '_id',
          as: 'Customer',
        })
        .unwind('Customer')
        .lookup({
          from: 'employees',
          localField: 'employeeId',
          foreignField: '_id',
          as: 'employee',
        })
        .unwind('employee')
        .project({
          customerId: 0,
          employeeId: 0,
        });

      let total = await Order.countDocuments();

      return res.status(200).send({
        total,
        totalResult: results.length,
        payload: results,
      });
    } catch (err) {
      console.log('««««« err »»»»»', err);
      return res.status(500).json({ code: 500, error: err });
    }
  },

  SortOrderByDateNToP: async (req, res, next) => {
    try {
      let results = await Order.find()
        .sort({
          createdDate: -1,
        })
        .populate("employee")
        .populate("customer");

      let total = await Product.countDocuments();

      return res.status(200).send({
        code: 200,
        total,
        totalResult: results.length,
        payload: results,
      });

    } catch (err) {
      console.log('««««« err »»»»»', err);
      return res.status(500).json({ code: 500, error: err });
    }
  },

  SortOrderByDatePToN: async (req, res, next) => {
    try {
      let results = await Order.find()
        .sort({
          createdDate: 1,
        })
        .populate("employee")
        .populate("customer");

      let total = await Product.countDocuments();

      return res.status(200).send({
        code: 200,
        total,
        totalResult: results.length,
        payload: results,
      });

    } catch (err) {
      console.log('««««« err »»»»»', err);
      return res.status(500).json({ code: 500, error: err });
    }
  },

  SortOrderbyStatusWithDate: async (req, res, next) => {
    try {
      let { status, fromDate, toDate } = req.query;

      fromDate = new Date(fromDate);
      fromDate.setHours(0, 0, 0, 0);

      const tmpToDate = new Date(toDate);
      tmpToDate.setHours(0, 0, 0, 0);
      toDate = new Date(tmpToDate.setDate(tmpToDate.getDate() + 1));

      const compareStatus = { $eq: ['$status', status] };
      const compareFromDate = { $gte: ['$shippedDate', fromDate] };
      const compareToDate = { $lte: ['$updatedAt', toDate] };

      const conditionFind = {
        $expr: { $and: [compareStatus, compareFromDate, compareToDate] },
      };

      let results = await Order.find(conditionFind)
        .populate('productList.product')
        .populate('customer')
        .populate('employee')
        .lean();

      let total = await Order.countDocuments();

      return res.status(200).send({
        total,
        totalResult: results.length,
        payload: results,
      });
    } catch (err) {
      console.log('««««« err »»»»»', err);
      return res.status(500).json({ code: 500, error: err });
    }
  },


}