import * as yup from 'yup';

export const restaurantValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  address: yup.string().nullable(),
  opening_time: yup.date().nullable(),
  closing_time: yup.date().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
