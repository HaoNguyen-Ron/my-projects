const { fuzzySearch } = require('../../utils');

const axios = require('axios');

require('dotenv').config();

const Product = require('./model');
const Category = require('./../category/model')
const Supplier = require('./../supplier/model')


module.exports = {
  getAll: async (req, res, next) => { // NOTE
    try {
      let results = await Product.find({
        isDeleted: false,
      })
        .populate('category') //productSchema.virtual('category'), at models/product
        .populate('supplier') //productSchema.virtual('supplier'), at models/product
        .lean();

        res.status(200).send({ 
           payload: results 
          });
    } catch (err) {
      res.status(400).send({
        message: "Không tìm thấy",
        err,
      });
    }
  },

  getList: async (req, res, next) => { // NOTE
    try {
      const { page, pageSize } = req.query;
      const limit = pageSize || 12;

      const skip = limit * (page - 1) || 0;

      const conditionFind = { isDeleted: false };

      let results = await Product.find(conditionFind)
        .populate('category')
        .populate('supplier')
        .skip(skip)
        .limit(limit)
        .lean();

      const total = await Product.countDocuments(conditionFind);

      return   res.status(200).send({ payload: results, total });
    } catch (err) {
      return  res.status(400).send({
        message: "Không tìm thấy",
        err,
      });
    }
  },

  //search
  search: async (req, res, next) => {
    try {
      const { name, categoryId, priceStart, priceEnd, supplierId, limit, stockStart, stockEnd, page } = req.query;
      const conditionFind = { isDeleted: false };

      if (name) conditionFind.name = fuzzySearch(name);

      if (categoryId) {
        conditionFind.categoryId = categoryId;
      };

      if (supplierId) {
        conditionFind.supplierId = supplierId;
      };

      if (priceStart && priceEnd) { // 20 - 50
        const compareStart = { $lte: ['$price', priceEnd] }; // '$field'
        const compareEnd = { $gte: ['$price', priceStart] };
        conditionFind.$expr = { $and: [compareStart, compareEnd] };

      } else if (priceStart) {
        conditionFind.price = { $gte: parseFloat(priceStart) };

      } else if (priceEnd) {
        conditionFind.price = { $lte: parseFloat(priceEnd) };
      }

      const result = await Product.find(conditionFind)
        .populate('category')
        .populate('supplier');

      res.send(200, {
        message: "Thành công",
        payload: result,
      });
    } catch (error) {
      return res.send(404, {
        message: "Không tìm thấy",
      })
    }
  },

  getDetail: async (req, res, next) => {
    try {
      const { id } = req.params;

      let result = await Product.findOne({
        _id: id,
        isDeleted: false,
      })
        .populate('category')
        .populate('supplier');

      if (result) {
        return res.send({ code: 200, payload: result });
      }

      return res.status(404).send({ code: 404, message: 'Không tìm thấy' });
    } catch (err) {
      res.status(404).json({
        message: 'Không tìm thấy',
        payload: err,
      });
    }
  },

  //----------------------------------------------CREATE-----------------------------------------------//
  create: async (req, res, next) => {
    try {
      const { name, price, discount, stock, description, supplierId, categoryId } = req.body;

      const getSupplier = Supplier.findOne({
        _id: supplierId,
        isDeleted: false,
      });
      const getCategory = Category.findOne({
        _id: categoryId,
        isDeleted: false,
      });

      const [existSupplier, existCategory] = await Promise.all([getSupplier, getCategory]);

      const error = [];
      if (!existSupplier) error.push("Nhà cung cấp không khả dụng");
      if (!existCategory) error.push("Danh mục không khả dụng");

      if (error.length > 0) {
        return res.send(400, {
          error,
          message: "Không khả dụng"
        });
      }
      
      const newRecord = new Product({
        name,imgPath, price, discount, stock, description, supplierId, categoryId,
      });   

      let result = await newRecord.save();

      return res.status(200).send({
        message: "Thành công",
        payload: result,
      });
    } catch (error) {
      console.log('««««« error »»»»»', error);
      return  res.status(400).send({
        message: "Có lỗi",
        error,
      });
    }
  },

  //----------------------------------------------UPDATE-----------------------------------------------//
  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name, price, discount, stock, description, supplierId, categoryId} = req.body;

      // Check if the product exists and is not deleted
      const product = await Product.findOne({ _id: id, isDeleted: false });

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      const error = [];

      // Check if the supplier exists and is not deleted
      if (product.supplierId.toString() !== supplierId.toString()) {
        const supplier = await Supplier.findOne({ _id: supplierId, isDeleted: false });

        if (!supplier) error.push("Supplier not available");
      }

      // Check if the category exists and is not deleted
      if (product.categoryId.toString() !== categoryId.toString()) {
        const category = await Category.findOne({ _id: categoryId, isDeleted: false });

        if (!category)  error.push("Category not available");
      }

      if (error.length > 0 ) {
        return  res.status(400).send( {
          error,
          message: "Found error"
        });
      }
      // Update the product
      const updatedProduct = await Product.findByIdAndUpdate(
        { _id: id, isDeleted: false },
        { name, price, discount, stock, description, supplierId, categoryId },
        { new: true }
      );


      if (updatedProduct) {
        return res.status(200).json({
          message: "Update successful",
          payload: updatedProduct,
        });
      }

      return res.status(400).json({ message: "Update failed" });

    } catch (error) {
      console.log('««««« error »»»»»', error);
      return res.status(400).send({
        message: "Error",
        error,
      });
    }
  },

  //----------------------------------------------DELETE-----------------------------------------------//
  hardDelete: async (req, res, next) => {
    try {
      const { id } = req.params;

      const result = await Product.findByIdAndUpdate(
        id,
        { isDeleted: true },
        { new: true },
      );

      if (result) {
        return res.status(200).send({
          message: "Xóa thành công",
          payload: result,
        });
      }

      return res.status(400).send({
        message: "Thất bại",
      });
    } catch (error) {
      return res.status(400).send({
        message: "Không tìm thấy",
        error,
      });
    }
  },
};