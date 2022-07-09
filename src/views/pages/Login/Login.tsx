import { useNavigate } from 'react-router-dom';
import { Field } from '../../ui';
import { useAuth, useCaptchaQuery } from '../../../data/hooks';
import LoginForm from '../../components/LoginForm';

function Login() {
  const navigate = useNavigate();

  const { user, login } = useAuth();

  const { data: captchaData } = useCaptchaQuery();
  const captcha = captchaData?.data.url;

  if (user) {
    navigate('/', { replace: true });
  }

  return (
    <Field>
      <LoginForm captcha={captcha} onSubmit={login} />
    </Field>
  );
}

export default Login;
