import axiosClient from "utils/axiosClient";

export const getEmployeesList = async () => {
    try {
        const res = await axiosClient.get('/employees')

        return res.data.payload || []
    } catch (error) {
        console.log('««««« apiError »»»»»', error);
    }
};

export const getEmployeesAll = async () => {
    try {
        const res = await axiosClient.get('/employees/all')

        return res.data.payload || []
    } catch (error) {
        console.log('««««« apiError »»»»»', error);
    }
};

export const getProductAll = async () => {
    try {
        const res = await axiosClient.get('/products/all')

        return res.data.payload || []
    } catch (error) {
        console.log('««««« apiError »»»»»', error);
    }
};

export const getProductList = async () => {
    try {
        const res = await axiosClient.get('/products/')

        return res.data.payload || []
    } catch (error) {
        console.log('««««« apiError »»»»»', error);
    }
};

export const getCategoryAll = async () => {
    try {
        const res = await axiosClient.get('/categories/')

        return res.data.payload || []
    } catch (error) {
        console.log('««««« apiError »»»»»', error);
    }
};

export const getSupplierAll = async () => {
    try {
        const res = await axiosClient.get('/suppliers/')

        return res.data.payload || []
    } catch (error) {
        console.log('««««« apiError »»»»»', error);
    }
};

export const getOrderAll = async () => {
    try {
        const res = await axiosClient.get('/orders/')

        return res.data.payload || []
    } catch (error) {
        console.log('««««« apiError »»»»»', error);
    }
};


export const queryProductBySupplier = async () => {
    try {
        const res = await axiosClient.get('/query/filterPbyS')

        return res.data.payload || []
    } catch (error) {
        console.log('««««« apiError »»»»»', error);
    }
};

export const sortProductByAZ = async () => {
    try {
        const res = await axiosClient.get('/query/sortPByAZ')

        return res.data.payload || []
    } catch (error) {
        console.log('««««« apiError »»»»»', error);
    }
};

export const sortProductByZA = async () => {
    try {
        const res = await axiosClient.get('/query/sortPByZA')

        return res.data.payload || []
    } catch (error) {
        console.log('««««« apiError »»»»»', error);
    }
};

export const sortCategoryByAZ = async () => {
    try {
        const res = await axiosClient.get('/query/sortCByAZ')

        return res.data.payload || []
    } catch (error) {
        console.log('««««« apiError »»»»»', error);
    }
};

export const sortCategoryByZA = async () => {
    try {
        const res = await axiosClient.get('/query/sortCByZA')

        return res.data.payload || []
    } catch (error) {
        console.log('««««« apiError »»»»»', error);
    }
};

export const sortSupplierByAZ = async () => {
    try {
        const res = await axiosClient.get('/query/sortSByAZ')

        return res.data.payload || []
    } catch (error) {
        console.log('««««« apiError »»»»»', error);
    }
};

export const sortSupplierByZA = async () => {
    try {
        const res = await axiosClient.get('/query/sortSByZA')

        return res.data.payload || []
    } catch (error) {
        console.log('««««« apiError »»»»»', error);
    }
};

export const SortProductPriceHToL = async () => {
    try {
        const res = await axiosClient.get('/query/sortProductPriceFromHtoL')

        return res.data.payload || []
    } catch (error) {
        console.log('««««« apiError »»»»»', error);
    }
};

export const SortProductPriceLToH = async () => {
    try {
        const res = await axiosClient.get('/query/sortProductPriceFromLtoH')

        return res.data.payload || []
    } catch (error) {
        console.log('««««« apiError »»»»»', error);
    }
};

export const fuzzySearch = (text) => {
    const regex = text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

    return new RegExp(regex, 'gi');
};
