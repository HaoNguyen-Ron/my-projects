import axiosClient from "utils/axiosClient";

export const getEmployeesId = async (id) => {
    try {
        const res = await axiosClient.get(`/employees/${id}`)

        return res.data.payload || []
    } catch (error) {
        console.log('««««« apiError »»»»»', error);
    }
};