import axiosClient from "utils/axiosClient";

export const ChangeOrderStatus = async (id, value) => {
    try {
        const res = await axiosClient.patch(`/orders/status/${id}`, value)

        return res.data.payload || []
    } catch (error) {
        console.log('««««« apiError »»»»»', error);
    }
};

export const SortOrderByDateNToP = async () => {
    try {
        const res = await axiosClient.get(`/query/sortOrderByDateNToP/`)
        
        return res.data.payload || []
    } catch (error) {
        console.log('««««« apiError »»»»»', error);
    }
};

export const SortOrderByDatePToN = async () => {
    try {
        const res = await axiosClient.get(`/query/sortOrderByDatePToN/`)

        return res.data.payload || []
    } catch (error) {
        console.log('««««« apiError »»»»»', error);
    }
};

export const SortOrderByStatus = async (status) => {
    try {
        const res = await axiosClient.get(`/query/sortOrderByStatus/`, {status: status})
        console.log('««««« res »»»»»', res);
        return res.data.payload || []

    } catch (error) {
        console.log('««««« apiError »»»»»', error);
    }
};

