import {Field} from "../../ui/Field";
import {compose} from "redux";
import {withRedirect} from "../../hoc";

export const NotfoundPure = () => (
  <Field>
    Страница не найдена!
  </Field>
);

export const Notfound = compose(withRedirect('/login'))(NotfoundPure);
