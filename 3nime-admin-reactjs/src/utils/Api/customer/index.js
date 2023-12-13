import axiosClient from "utils/axiosClient";

export const getCustomersList = async () => {
    try {
        const res = await axiosClient.get('/customers')

        return res.data.payload || []
    } catch (error) {
        console.log('««««« apiError »»»»»', error);
    }
};

export const getCustomersId = async (id) => {
    try {
        const res = await axiosClient.get(`/customers/${id}`)

        return res.data.payload || []
    } catch (error) {
        console.log('««««« apiError »»»»»', error);
    }
};

