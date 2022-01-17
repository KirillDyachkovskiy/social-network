import { addPost } from '../../../../../redux/reducer/profileReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import c from './SubmitPost.module.scss'
import { useForm } from 'react-hook-form';

const PostForm = ({ addPost }) => {
  const { register, handleSubmit, reset, formState: { isValid } } = useForm({
    mode: 'onChange',
  });
  const onSubmit = ({ postText }) => {
    addPost(postText);
    reset();
  };
  return (
    <div className={c.post}>
      <div className={c.submitPost}>
        <form
          autoComplete='off'
          onSubmit={handleSubmit(onSubmit)} >
          <input
            placeholder="What' s new?"
            {...register('postText', {
              required: true,
            })} />
          <input
            type='submit'
            disabled={!isValid}
            value='Post' />
        </form>
      </div>
    </div>
  )
};

export const SubmitPost = compose(
  connect(null, { addPost, })
)(PostForm);
