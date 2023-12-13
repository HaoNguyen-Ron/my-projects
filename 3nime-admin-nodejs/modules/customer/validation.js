var express = require('express');

const yup = require('yup');

const customerSchema = yup.object({
    body: yup.object({
        fullName: yup
            .string()
            .max(50)
            .required('Full name is required!'),
        isDeleted: yup
            .bool(),
        email: yup
            .string()
            .email()
            .required('Email is required!'),
        phoneNumber: yup
            .string()
            .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, 'Invalid VN phone number')
            .required('Phone number is required!'),
        city: yup
            .string()
            .required('City is required!'),

        district: yup
            .string()
            .required('District is required!'),

        ward: yup
            .string()
            .required('Ward is required!'),

        street: yup
            .string()
            .max(500, 'Maxium 500 characters')
            .required('Street is required!'),

        password: yup
            .string()
            .min(6, 'Minimum 6 characters')
            .required('Password is Required!'),
    }),
});
module.exports = {
    customerSchema,
};