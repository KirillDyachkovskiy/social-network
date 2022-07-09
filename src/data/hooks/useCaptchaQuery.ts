import { useQuery } from 'react-query';
import { securityService } from '../api/Api';

const useCaptchaQuery = () => useQuery('captcha', securityService.getCaptcha);

export default useCaptchaQuery;
