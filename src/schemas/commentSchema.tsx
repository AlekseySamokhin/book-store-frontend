import * as yup from 'yup';

const commentSchema = yup.object().shape({
  commnet: yup.string(),
});

export { commentSchema };
