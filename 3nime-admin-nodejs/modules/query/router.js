var express = require('express');
const { FilterProductBySupplier,
    SortProductAToZ,
    SortProductZToA,
    SortProductPriceHToL,
    SortProductPriceLToH,
    SortCategoryAToZ,
    SortCategoryZToA,
    SortSupplierAToZ,
    SortSupplierZToA
} = require('./controller');
const { getOrderWithPrice, SortOrderbyStatus, SortOrderbyStatusWithDate, SortOrderByDateNToP, SortOrderByDatePToN, SortOrderbyPayment } = require('./orderQuery');

var router = express.Router();

router.get('/filterPbyS', FilterProductBySupplier);
router.get('/sortPByAZ', SortProductAToZ);
router.get('/sortPByZA', SortProductZToA);
router.get('/sortCByAZ', SortCategoryAToZ);
router.get('/sortCByZA', SortCategoryZToA);
router.get('/sortSByAZ', SortSupplierAToZ);
router.get('/sortSByZA', SortSupplierZToA);
router.get('/sortProductPriceFromHtoL', SortProductPriceHToL);
router.get('/sortProductPriceFromLtoH', SortProductPriceLToH);
router.get('/getOrderAllWithPrice', getOrderWithPrice);
router.get('/sortOrderByStatus', SortOrderbyStatus);
router.get('/sortOrderByStatusWithDate', SortOrderbyStatusWithDate);
router.get('/sortOrderByPayment', SortOrderbyPayment);
router.get('/sortOrderByDateNToP', SortOrderByDateNToP);
router.get('/sortOrderByDatePToN', SortOrderByDatePToN);

module.exports = router;
