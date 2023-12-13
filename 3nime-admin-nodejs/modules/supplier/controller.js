const { default: mongoose } = require('mongoose');

const { fuzzySearch } = require('../../utils');

const Supplier = require('./model');


const getAll = async (req, res, next) => {
    try {
        const payload = await Supplier.find({
            isDeleted: false
        });
        res.status(200).send({
            payload: payload,
            message: "Tạo thành công"
        });
    } catch (error) {
        res.status(400).send({
            error,
            message: "Tạo thất bại"
        });
    }
};

//get detail
const getDetail = async function (req, res, next) {
    try {
        const { id } = req.params;

        const payload = await Supplier.findOne({
            _id: id,
            isDeleted: false,
        });

        res.status(200).send({
            payload: payload,
            message: "Tạo thành công"
        });
    } catch (error) {
        res.status(400).send({
            error,
            message: "Tạo thất bại"
        });
    }
};

//search
const search = async function (req, res, next) {
    try {
        const { name } = req.query;

        const conditionFind =  {isDeleted: false};

        if(name){
            conditionFind.name = fuzzySearch(name)
        };

        const payload = await Supplier.find(conditionFind);

        res.status(200).send({
            payload: payload,
            message: "Tim kiếm tên thành công"
        });
    } catch (error) {
        res.status(400).send({
            error,
            message: "Tim kiếm tên thất bại"
        });
    }
};

/** CREATE */

const create = async function (req, res, next) {
    const { name, email, phoneNumber, isDeleted, address } = req.body;

    try {
        const newSupplier = new Supplier({
            name,
            email,
            phoneNumber,
            address,
            isDeleted
        });

        const payload = await newSupplier.save();


        res.status(200).send({
            payload: payload,
            message: "Tạo thành công"
        });
    } catch (err) {
        res.status(400).send({
            err,
            message: "Tạo thất bại"
        });
    }
};

/** UPDATE */
const update = async function (req, res, next) {
    try {
      const { id } = req.params;
  
      const payload = await Supplier.findOneAndUpdate(
        { _id: id, isDeleted: false },
        { ...req.body },
        { new: true },
      );
  
      if (payload) {
        return  res.status(200).send({
          payload,
          message: "Cập nhập thành công"
        });
      }
      return res.send(404, { message: "Không tìm thấy" });
    } catch (error) {
      console.log('««««« error »»»»»', error);
      res.status(400).send({
        error,
        message: "Cập nhập không thành công"
      });
    }
  };


/** DELETE */
const hardDelete = async function (req, res, next) {

    try {
        const { id } = req.params;
        const payload = await Supplier.findOneAndUpdate(
            {
                _id: id,
                isDeleted: false
            },
            { isDeleted: true },
            { new: true }
        );
        if (payload) {

            res.status(200).send({
                payload: payload,
                message: "Xóa thành công"
            });
        }
        res.status(400).send({message: 'Không tìm thấy tên nhà cung cấp'})
    } catch (err) {
        res.status(400).send({
            err,
            message: "Xóa thất bại"
        });
    }
};

module.exports = {
    getAll,
    search,
    getDetail,
    create,
    hardDelete,
    update
};