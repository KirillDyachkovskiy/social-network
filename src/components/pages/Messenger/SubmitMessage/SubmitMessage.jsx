import { sendMessage } from '../../../../redux/reducer/messengerReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import c from './SubmitMessage.module.scss';
import { useForm } from 'react-hook-form';

const MessageForm = ({ sendMessage }) => {
  const { register, handleSubmit, reset, formState: { isValid } } = useForm({
    mode: 'onChange',
  });
  const onSubmit = ({ messageText }) => {
    sendMessage(messageText);
    reset();
  };
  return (
    <div className={c.message}>
      <form
        autoComplete='off'
        onSubmit={handleSubmit(onSubmit)} >
        <input
          placeholder='Write a message'
          {...register('messageText', {
            required: true,
          })} />
        <input
          type='submit'
          disabled={!isValid}
          value='Send' />
      </form>
    </div>
  )
};

export const SubmitMessage = compose(
  connect(null, { sendMessage, })
)(MessageForm);
