import { compose } from 'redux';
import Field from '../../ui/Field';
import withRedirect from '../../components/withRedirect';

function Notfound() {
  return <Field>Страница не найдена!</Field>;
}

export default compose(withRedirect)(Notfound);
