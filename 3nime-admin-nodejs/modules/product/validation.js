const yup = require('yup');
const ObjectId = require('mongodb').ObjectId;

const validationSchema = yup.object().shape({
    body: yup.object({
        name: yup
            .string()
            .max(50, "Maximum 50 characters")
            .required("Name is Required!"),

        price: yup
            .number()
            .min(0, "Price must be positive number")
            .integer()
            .required(({ path }) => `${path.split(".")[1]} Price is required`),

        discount: yup
            .number()
            .min(0, "Discount must be positive number")
            .max(75, "Maximum discount is 75%")
            .integer()
            .required(({ path }) => `${path.split(".")[1]} Discount is required`),

        stock: yup
            .number()
            .min(0, "Invalid quantity")
            .integer()
            .required(({ path }) => `${path.split(".")[1]} Stock is required`),

        description: yup
            .string()
            .max(3000, "Maxium 3000 characters")
            .required(({ path }) => `${path.split(".")[1]} description is required`),

        categoryId: yup
            .string()
            .required()
            .test('Validate ObjectID', '${path} is not valid ObjectID', (value) => {
                if (!value) return true;
                return ObjectId.isValid(value);
            }),

        supplierId: yup
            .string()
            .required()
            .test('Validate ObjectID', '${path} is not valid ObjectID', (value) => {
                if (!value) return true;
                return ObjectId.isValid(value);
            }),
    }),
});

const validationQuerySchema = yup.object().shape({
    query: yup.object({
        categoryId: yup
            .string()
            .test('Validate ObjectID', '${path} is not valid ObjectID', (value) => {
                if (!value) return true;
                return ObjectId.isValid(value);
            }),

        priceStart: yup
            .number()
            .min(0, 'Price start must be positive number')
            .test('Invalid price', (value, context) => {
                if (!value) return true; // Không điền giá kết thúc

                if (context.parent.priceEnd) {
                    return value < context.parent.priceEnd // Giá kết thúc phải lớn hơn giá bắt đầu (nếu có)
                };
            }),

        priceEnd: yup
            .number()
            .min(0, 'Price end must be positive number')
            .test('Invalid price', (value, context) => {
                if (!value) return true; // Không điền giá kết thúc

                if (context.parent.priceStart) {
                    return value > context.parent.priceStart; // Giá kết thúc phải lớn hơn giá bắt đầu (nếu có)
                }

                return value > 0;
            }),

        page: yup
            .number()
            .min(1),

        limit: yup
            .number()
            .min(2),

        supplierId: yup
            .string()
            .test('Validate ObjectID', '${path} is not valid ObjectID', (value) => {
                if (!value) return true;
                return ObjectId.isValid(value);
            }),

        name: yup
            .string(),

        stockStart: yup
            .number()
            .min(0, 'Stock start must be positive number'),


        stockEnd: yup
            .number(),

        discountStart: yup
            .number()
            .min(0, 'Discount start must be positive number'),

        discountEnd: yup
            .number()
            .max(75, "Maximum discount is 75%"),

        skip: yup
            .number(),

        limit: yup
            .number(),
    }),
});

module.exports = {
    validationSchema,
    validationQuerySchema,
}